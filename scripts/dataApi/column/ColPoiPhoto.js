/**
 *
 */
FM.dataApi.ColPoiPhoto = FM.dataApi.GeoDataModel.extend({
    geoLiveType: 'IX_POI_PHOTO',
    /*
     * 返回参数赋值
     */
    setAttributes: function (data) {
        this.poiPid = data.poiPid;
        this.photoId = data.photoId || 0;
        // this.pid = data['pid'] || ""; //由于此处的PID是一个有意义的字段，所以修改成了fccPid
        this.fccPid = data.fccPid || '';
        this.status = data.status || '';
        this.tag = data.tag || 1;
        this.memo = data.memo || '';
        this.thumbnailUrl = data.thumbnailUrl || this.getThumbnailUrl(this.fccPid);
        this.originUrl = data.originUrl || this.getOriginUrl(this.fccPid);
        this.rowId = data.rowId || null;
    },
    getIntegrate: function () {
        var ret = {};
        ret.poiPid = this.poiPid;
        ret.fccPid = this.fccPid;
        ret.tag = this.tag;
        ret.photoId = this.photoId;
        ret.status = this.status;
        ret.memo = this.memo;
        ret.rowId = this.rowId;
        return ret;
    },
    getThumbnailUrl: function (pid) {
        var url = 'fcc/photo/getSnapshotByRowkey';
        url = App.Util.getFullUrl(url) + '&parameter={"rowkey":"' + pid + '",type:"thumbnail"}';
        return url;
    },
    getOriginUrl: function (pid) {
        var url = 'fcc/photo/getSnapshotByRowkey';
        url = App.Util.getFullUrl(url) + '&parameter={"rowkey":"' + pid + '",type:"origin"}';
        return url;
    }
});
