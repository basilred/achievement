module.exports = {
    block : 'page',
    title : 'Тестовое задание для ШРИ Яндекса',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'wrapper',
            content : function () {
                var achievementArray = [];
                for (var i = 1; i < 100; i++) {
                    achievementArray.push({
                        block : 'achievement',
                        mix : [ { elem : 'layout' } ],
                        mods : { obtained : [true, false][Math.floor(Math.random()*2)] },
                        number : i,
                        pic : [
                            'http://image005.flaticon.com/1/png/512/12/12708.png',
                            'http://cliparts.co/cliparts/rTL/npo/rTLnpogkc.png',
                            'http://www.clipartlord.com/wp-content/uploads/2015/04/tiger-face3.png',
                            'http://image005.flaticon.com/1/png/512/32/32707.png',
                            'http://simpleicon.com/wp-content/uploads/squidoo.png',
                            'https://cdn0.iconfinder.com/data/icons/rabbits_icons/512/rabbit_animal_pink.png',
                            'http://naklejka.ru/image/cache/data/naklejki/flowers/roza6-250x250.svg.png',
                            'http://top-sticker.ru/dll_image/1311_1439049291.png',
                            'http://www.rpgmakercentral.com/uploads/profile/photo-thumb-6524.png',
                            'http://ru.static.z-dn.net/files/d04/b7d0b7c46f501454934b16ef9c271aa8.png'
                        ][Math.floor(Math.random()*10)]
                    });
                }
                return achievementArray;
            }()
        }
    ]
};
