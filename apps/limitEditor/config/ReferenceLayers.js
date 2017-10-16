App.Config.map.ReferenceLayers = {
    tencent: {
        label: 'background',
        name: '腾讯',
        type: 'raster',
        options: {
            source: 'http://{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0',
            subdomains: ['rt0', 'rt1', 'rt2', 'rt3'],
            tms: true,
            minZoom: 1
        }
    },
    google: {
        label: 'background',
        name: '谷歌',
        type: 'raster',
        options: {
            source: 'http://{s}.google.cn/vt/lyrs=s@170&gl=cn&x={x}&y={y}&z={z}&s=Galileo',
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            tms: false,
            minZoom: 1
        }
    },
    grid: {
        label: 'overlay',
        name: '网格',
        type: 'grid',
        options: {
            minZoom: 1,
            divideX: 4,
            divideY: 4
        }
    },
    mesh: {
        label: 'overlay',
        name: '图幅',
        type: 'mesh',
        options: {
            minZoom: 1
        }
    },
    tile: {
        label: 'overlay',
        name: '瓦片',
        type: 'tile',
        options: {
            minZoom: 1
        }
    },
    feedback: {
        label: 'feedback',
        name: '高亮',
        type: 'feedback',
        options: {
            minZoom: 10
        }
    },
    overlay: {
        label: 'test',
        name: '遮盖层',
        type: 'overlay',
        options: {
            minZoom: 8,
            meshList: App.Temp.SubTask ? App.Temp.SubTask.meshList : []
        }
    }
};
