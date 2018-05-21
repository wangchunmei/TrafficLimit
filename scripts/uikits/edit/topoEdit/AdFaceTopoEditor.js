/**
 * Created by mali on 2017/3/16.
 */

fastmap.uikit.topoEdit.ADFaceTopoEditor = fastmap.uikit.topoEdit.TopoEditor.extend({
    initialize: function (map) {
        fastmap.uikit.topoEdit.TopoEditor.prototype.initialize.call(this, map);

        // 绑定函数作用域
        FM.Util.bind(this);
    },

    /**
     * 创建工具需要使用的EditResult
     * @param options
     * @returns {null}
     */
    getCreateEditResult: function (options) {
        var editResult = new fastmap.uikit.shapeEdit.PolygonResult();
        editResult.geoLiveType = 'ADFACE';
        editResult.finalGeometry = {
            type: 'LineString',
            coordinates: []
        };
        return editResult;
    },

    /**
     * 线构面工具需要使用的EditResult
     * @param options
     * @returns {null}
     */
    getBuildEditResult: function (options) {
        var editResult = new fastmap.uikit.relationEdit.LineDimensionsResult();
        editResult.geoLiveType = 'ADFACE';
        editResult.snapFeatureType = 'ADLINK';
        editResult.nodeType = 'ADNODE';
        return editResult;
    },

    /**
     * 创建接口
     * 子类需要重写此方法
     * @param editResult 编辑结果
     */
    create: function (editResult) {
        var ring = FM.Util.clone(editResult.finalGeometry);
        this.geometryAlgorithm.close(ring);

        var data = {
            geometry: ring
        };

        return this.dataService.create('ADFACE', data);
    },

    query: function (options) {
        var params = {
            dbId: options.dbId,
            type: 'ADFACE',
            pids: [options.pid]
        };
        return this.dataServiceFcc.getByPids(params);
    },

    /**
     * 线构面接口
     * @param editResult 编辑结果
     */
    build: function (editResult) {
        var linksArr = [];
        for (var i = 0; i < editResult.links.length; i++) {
            linksArr.push(editResult.links[i].properties.id);
        }

        var data = {
            linkType: editResult.snapFeatureType,
            linkPids: linksArr
        };

        return this.dataService.create('ADFACE', data);
    }
});

