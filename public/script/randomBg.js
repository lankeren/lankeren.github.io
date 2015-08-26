var photoList = [
    {
        url:'http://i.imgur.com/Qqm3uRc.jpg?1',
        description: '2014.10.19 青岛·栈桥'
    },
    /*
    {
        url:'http://i.imgur.com/1wrlIr4.jpg',
        description: '即墨·蓝村'
    },
    {
        url:'http://i.imgur.com/Jjzd1A0.jpg',
        description: '青岛·栈桥'
    },
    {
        url:'http://i.imgur.com/ZkyTVPo.jpg',
        description: '青岛·春阳路肯德基'
    },
    {
        url:'http://i.imgur.com/H1I0teS.jpg',
        description: '淄博·山理1#实验楼天台'
    },
    {
        url:'http://i.imgur.com/3eyx6WB.jpg',
        description: '即墨·蓝村'
    },
    {
        url:'http://i.imgur.com/iAekNy6.jpg',
        description: '威海·国际海水浴场'

    },
    {
        url:'http://i.imgur.com/Zv5uwA4.jpg',
        description: '北京·知春路盈都大厦天台'
    },
    {
        url:'http://i.imgur.com/zExxflf.jpg',
        description: '青岛城阳·即墨18路公交'
    },
    {
        url:'http://i.imgur.com/647ajHl.jpg',
        description: '青岛农业大学G区'
    },
    {
        url:'http://i.imgur.com/51pczrx.jpg',
        description: '北京·回龙观'
    },
    {
        url:'http://i.imgur.com/ziIHnhc.jpg',
        description: '淄博·丽景园酒店'
    },
    {
        url:'http://i.imgur.com/1cuZDR8.jpg',
        description: '天津站'
    },
    {
        url:'http://i.imgur.com/sF9FYFp.jpg',
        description: '青岛·广州路'
    },
    {
        url:'http://i.imgur.com/MMeeAID.jpg',
        description: '青岛·城阳915路公交'
    },
    {
        url:'http://i.imgur.com/eXncpha.jpg',
        description: '青岛·栈桥'
    },
    {
        url:'http://i.imgur.com/Zq0KiGI.jpg',
        description: '即墨·蓝村站小饭馆'
    },
    {
        url:'http://i.imgur.com/7aNMFBh.jpg',
        description: '青岛·中山公园'
    },
    */
];

var body = document.getElementsByTagName('body')[0];
var note = document.getElementById('note');
var i = Math.floor(Math.random()*photoList.length);
body.style.backgroundImage = 'url('+ photoList[i].url + ')';
note.innerText = photoList[i].description;
