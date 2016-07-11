block('achievement')(
    content()(function () {
        return [
            {
                elem : 'number',
                content: this.ctx.number || ''
            },
            {
                elem : 'pic',
                attrs : { src: this.ctx.pic || '' }
            }
        ];
    })
);

block('achievement').elem('number')(
    tag()('span')
);

block('achievement').elem('pic')(
    tag()('img')
);
