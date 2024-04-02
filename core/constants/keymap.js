module.exports = [
    {
        keys:['tìm truyện'],
        cmd:'findManga',
    },
    {
        keys:['hỏi', 'ai biết', 'tìm', 'cho', 'quăng', 'kiếm', 'ném'],
        extraKeys: ['anime', 'manga', 'bộ', 'phần', 'ảnh', 'người yêu', 'waifu', 'hình'],
        cmd:'findimage',
    },
    {
        keys:['meo meo', 'moew moew', 'owo', 'uwu', 'owo','vwv', 'mèo méo meo','👉👈','👉 👈'],
        cmd:'findimage',
        content:'tìm ảnh'
    },
    {
        keys:['chọn', 'select', 'pick', 'thích'],
        cmd:'select',
    },
    {
        keys:['là gì','là'],
        extraKeys:[' hay ', ' hoặc '],
        content:'select',
        cmd:'select',
    },
    {
        keys:['nhất server', 'nhất ở đây', 'nhất vũ trụ', 'nhất thế giới', 'nhất trên đời', 'nhất nhà', 'nhất sv', 'nhất sever', 'siêu cấp vũ trụ'],
        cmd:'bestofserver',
        content:'bestofserver',
    },
    {
        keys: ['nghĩ sao', 'thấy sao', 'cảm nghĩ'],
        extraKeys: ['về', 'bộ', 'anime', 'manga', 'nhân vật', 'waifu'],
        cmd: 'search'
    },
    {
        keys: ['gọi là gì', 'là gì', 'định nghĩa', 'nghĩa là gì', 'là ai', 'là thế nào','ai là'],
        cmd: 'search'
    },
    {
        keys:['dead server', 'deadserver', 'server chết', 'chết server', 'chết máy chủ'],
        cmd:'answer',
        content:'deadserver'
    },
    {
        keys:['sendnude', 'send nude'],
        cmd:'answer',
        content:'sendnude'
    },
    {
        keys: ['solo', 'yasuo'],
        cmd: 'answer',
        content: 'soloyasuo'
    },
    {
        keys: ['bingchat'],
        cmd: 'bingchat',
        content: 'bingchat'
    }
]