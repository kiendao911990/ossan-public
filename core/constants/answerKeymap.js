module.exports = [
    {
        keys:['chào','hello','chao xìn','chèo','alo','lô','hế lu','alô'],
        conditionResponses: [
            {
                condition:{
                    roles: ['Admin','SuperAdmin','Excalibur']
                },
                messages:[{
                    content:'Chào anh admin ngầu lòi hihi',
                },
                {
                    content:'vâng, em ngưỡng mộ anh lắm'
                },
                {
                    content:'vâng cho em xin chữ ký ạ!!'
                },
                {
                    content:'chủ nhân cho gọi em ạ :D'
                }]
            },
            {
                condition:{
                    roles: ['Chơi bê đê không','Chủ động gei','Dutdjt em đi']
                },
                messages:[{
                    content:'Hi geiiiiiiiii'
                },
                {
                    content:'mị không sẽ gầy'
                },
                {
                    content:'Hi, nhưng mị không chơi geiii'
                },
                {
                    content:'gầy quá, cho gọi thằng bi'
                },
                {
                    content:'gầy không chơi, liah ra chơi với ổng đi'
                }]
            },
            {
                condition:{
                    roles: ['lolicon']
                },
                messages:[{
                    content:'đi theo mị nhé',
                    embed:{
                        image:'https://otakusan.net/extendContent/Sticker/48ce729b-4c7f-4d00-bbcc-be43ba4cd7d0.jpeg',
                        footer:'powered by otakusan.net'
                    }
                },
                {
                    content:'moshi, moshi, đây có lolicon'
                }],
            },
            {
                condition:{
                    authorIds: ['495079887162441728']
                },
                messages:[
                {
                    content:'Hi Phát geiiiiiiiii'
                },
                {
                    content:'Hi, nhưng mị không chơi geiii'
                },
                {
                    content:'gầy quá, cho gọi thằng bi'
                },
                {
                    content:'gầy không chơi, liah ra chơi với ổng đi'
                }],
            },
            {
                condition:{
                    authorIds: ['397767429037752321']
                },
                messages:[{
                    content:'Chào anh Tonyan đẹp trai'
                },
                {
                    content:'dạ, chủ nhân cứ nằm đó, em phục vụ tận nơi'
                }],
            },
            {
                condition:{
                    authorIds: ['451662839065870336']
                },
                messages:[{
                    content:'zjt zjt em thích thịt zjt'
                }],
            }
        ],
        responses:[
            { content:'Chào bạn hihi' },
            { content:'Bóp zú cái nà' },
            { content:'chào người đẹp trai nhất vũ trụ' },
            { content:'chủ nhân cho gọi em ạ :D' },
            { content:'chào anh, em là hầu gái dễ thương mới ở server này' },
            { content:'hi, em là hầu gái dễ thương mới của Liah-sama' },
            { content:'muốn hỏi gì thì hãy nhập [cho hỏi] nhé, mị sẽ trả lời tận tình' }
        ],
        cmd: 'helloAnswer'
    },
    {
        responses:[
            {
                content:'ai kêu hầu gái siêu cấp vũ trụ :D',
                embed:{
                    image:'https://otakusan.net/Content/Img/anwser.jpg',
                    footer:'powered by otakusan.net'
                }
            },
            { content:'wut <:rem_thinking:369896633745539092> ?' },
            { content:'ai gọi mị đó có mị đây'},
            { content:'chủ nhân iz de bezt' },
            { content:'có thể bạn không biết nhưng mị có thể tìm hình ảnh đấy :3' },
            { content:'gọi cho lão Liah đê' },
            { content:'mắc mệt... liah ra chào đi kia' },
            { content:'đã seen' },
            { content:'<:pepe_chuahe:911940527857991691>' },
            { content:'hihi, đã nghe' },
            { content:'<:rem_thinking:369896633745539092>' },
            { content:'<:zjt2:773744325896044554>' },
            { content:'Bóp zú cái nà' },
        ],
        cmd: 'happyAnswer'
    },
    {
        keys:['shit','địt','cmm','cl','mẹ','đệt','đệch','đệch', 'dm','tiên sư', 'lm'],
        responses:[
            { content:'đã seen' },
            { content:'seen nhẹ ahihi' },
            { content:'gầy, không tiếp' },
            { content:'đóng cửa thả chó',
                embed:{
                    image:'https://cdn.weeb.sh/images/HJKiX1tPW.gif',
                    footer:'powered by weeb.sh'
                }
            },
            { content:'á à, thì ra mài chọn cái chết' },
            { content:'omae wa mou shindeiru <:paimon_leer:773734412248154143>' },
            { content:'everything rồi sẽ daijoubu 😘' },
            { content:'<:tho_nhin_qq:815942158975893595>' },
        ],
        cmd: 'shitAnswer'
    },
    {
        keys:['gương kia'],
        conditionResponses: [
            {
                condition:{
                    contents: ['trên giường']
                },
                messages:[
                    { content:'gái kia nằm sải một đường cong cong' },
                    { content:'ngu à, bố mày treo trên tường' },
                    { content:'giường là cho mài nằm ịch' }
                ]
            }
        ],
        responses:[
            { content:'thôi, bà im mọe mồm lại giùm con' },
            { content:'dạ có em, bà không cần nói nữa, cầm gương lên, chảy phấn kìa' },
            { content:'thế gian ai lồng lộn bằng os-san 😘' },
            { content:'đã xong, con bích tèo rồi bà ạ' },
            { content:'nói, nhanh và ngay. mị đang bận' },
            { content:'mới hút cỏ à bạn <:pepe_chuahe:911940527857991691>' },
        ],
        cmd: 'mirrorAnwser'
    },
    {
        keys:['gáy lên','gáy lên'],
        responses:[
            { content:'lên nóc nhà là lên nóc nhà, lên nóc nhà là bắt con gà' },
            { content:'gà mà không gáy là con gà quay, gà mà đi gáy là con gà tây' },
            { content:'a.... aa.... yamate kuda sai' },
            { content:'i cư, i cư, daddy hư quá' },
            { content:'Gâu gâu gâu' },
            { content:'liah-sama ra gáy kìa' },
            { content:'<:pepe_chuahe:911940527857991691>' }
        ],
        cmd: 'huAnwser'
    },
    {
        keys:['thank','thanks','cảm ơn', 'củm ơn'],
        responses:[
            { content:'vâng!' },
            { content:'vầng~~~' },
            { content:'hihi' }
        ],
        cmd: 'thanksAnswer'
    },
    {
        keys:['chim sẻ gọi đại bàng'],
        responses:[
            { content:'gọi gọi cc' },
            { content:'đại bàng đang ỉa' },
            { content:'đại bàng éo rảnh' }
        ],
        cmd: 'callAnswer'
    },
    {
        keys:['đập đá','hút cỏ', 'kẻ phấn'],
        responses:[
            { content:'mị luôn yêu thích cây cỏ, nên hút cỏ để bảo vệ môi trường' },
            { content:'mị ăn chay mà, cỏ này nọ qua ngày thôi' },
            { content:'moshi moshi, ở đây có chơi đá' },
            { content:'hút keo con chó đi pa, phê hơn nhiều' },
            { content:'nghèo, mị chơi lá đu đủ thôi' },
            { content:'mị chưa bao h chơi mấy thứ đó, dm liah đâu, quỳ xuống cho mị!' }
        ],
        cmd: 'sweepAnswer'
    },
    {
        keys:['đá gà','gà 45k','sex', ' sẽ ', 'segg', 'muốn cắn'],
        conditionResponses: [
            {
                condition:{
                    contents: ['gầy']
                },
                messages:[
                    { content:'mời gọi cho <@978339533588430898> à' },
                    { content:'mị không chơi gầy' },
                    { content:'mị là gái, gầy gầy cc <:pepe_reee:604555569881415690>' },
                    { content:'hí hí, người ta mới lớn à nhưng anh chịu đau được không <:zjt2:773744325896044554>?' },
                    { content:'lần đầu nghe nói đau lắm, ko ngồi được á' }
                ]
            }
        ],
        responses:[
            { content:'69 bùi viện <:blob_lenny:560487919215837196>' },
            { content:'09331573874 <:meme_cop:773725111060135956>' },
            { content:'moshi moshi, ở đây có thằng quấy rồi tềnh dục' },
            { content:'ba mẹ đang còng lưng kiếm tiền, gà gà cc' },
            { content:'hư đốn, nhưng mị thích, phòng 1408 vô mị chờ :v' },
            { content:'em đây, ăn đi anh ơi <:blob_lenny:560487919215837196>' },
            { content:'ứ không chịu đâu, má la chết' },
            { content:'ố dè cuối cùng mị cũng tìm được thằng đổ vỏ rồi' },
            { content:'hí hí, người ta mới lớn à nhưng anh chịu đau được không <:zjt2:773744325896044554>?' },
            { content:'lần đầu nghe nói đau lắm, ko ngồi được á <:loli_kawaiicheer:591092717803798535>' },
            { content:'bóp zú cái nà' }
        ],
        cmd: 'bitchAnswer'
    },
    {
        keys:['tuổi','trình'],
        responses:[
            { content:'tuổi chỉ là những con số' },
            { content:'tuổi lùn' },
            { content:'không đủ tuổi!!!' },
            { content:'loli bà bà' }
        ],
        cmd: 'ageAnswer'
    },
    {
        keys:['time','mấy giờ'],
        responses:[
            { content:'ngày này năm ấy' },
            { content:'👈🕐🕚👉' },
            { content:'cầm điền thoại lên, nhấn nút phát rồi nhìn vào màn hình' },
            { content:'góc dưới bên phải á má ơi' },
            { content:'hời dian chỉ là quá kứ, mik chỉ thk nhìn vào tomorrow' }
        ],
        cmd: 'timeAnswer'
    },
    {
        keys:['ngày mà','khi nào', 'tính ngày'],
        responses:[
            { content:'ngày mùng 6/9/2069' },
            { content:'69 ngày nữa' },
            { content:'ok' },
            { content:'làm méo gì có' },
            { content:'hahaha cười ỉa, mài hỏi khi nào mị chiếm thế giới này thì còn có thể' },
            { content:'vấn đang đếm' }
        ],
        cmd: 'dateAnswer'
    },
    {
        keys:['lập ra server','người tạo ra','người viết ra','viết bởi ai','tạo bởi ai'],
        responses:[
            { content:'Liah-sama iz de bezt' },
            { content:'sếp là nhứt, mị là nhì, ba là mymy :#',
                embed:{
                    image:'https://otakusan.net/Content/Img/anwser1.jpg',
                    footer:'powered by otakusan.net'
                }
            },
            { content:'Liah number one, number one, number one',
                embed:{
                    image:'https://otakusan.net/Content/Img/anwser2.jpg',
                    footer:'powered by otakusan.net'
                }
            }
        ],
        cmd: 'liahAnswer'
    },
    {
        responses:[
            { content:'gọi lằm gọi lốn <:ram_gian:369896633066061828>' },
            { content:'gầy, ko nói chuyện' },
            { content:'đóng cửa thả chó miễn tiếp khách',
                embed:{
                    image:'https://cdn.weeb.sh/images/HJKiX1tPW.gif',
                    footer:'powered by weeb.sh'
                }
            },
            { content:'gọi gọi éo!!!',
                embed:{
                    image:'https://cdn.weeb.sh/images/rJs7GAttb.gif',
                    footer:'powered by weeb.sh'
                }
            },
            { content:'đã seen' },
            { content:'<:pepe_xi:589295950875590657>' },
            { content:'phắn' },
        ],
        cmd: 'angryAnswer'
    },
    {
        keys:['chê'],
        responses:[
            { content:'cc',
                embed:{
                    image:'https://cdn.weeb.sh/images/rJs7GAttb.gif',
                    footer:'powered by weeb.sh'
                }
            },
            { content:'này thì chê',
                embed:{
                    image:'https://cdn.weeb.sh/images/BJsi-8vd-.gif',
                    footer:'powered by weeb.sh'
                }
            }
        ],
        cmd: 'cheAnswer'
    },
    {
        keys:['deadserver'],
        responses:[
            { content:'dead dead cc'},
            { content:'mài muốn dead luôn hông'},
            { content:'dead là dead thế nèo'},
            { content:'how about tắt máy, ra ngoài hít thở không khí'},
            { content:'đi kiếm bạn gái đê'},
            { content:'đi kiếm carbon dioxide để tạo oxygen đê'}
        ],
        cmd: 'deadserverAnswer'
    },
    {
        keys:['solo','yasuo 5p gg', 'soloyasuo'],
        responses:[
            { content:'nổ địa chỉ'},
            { content:'hời, chấp 1 tay 1 chân'},
            { content:'trình đồng đoàn mà đòi solo cao thủ?'},
            { content:'cho xin cái tuổi và rank'},
            { content:'so... we meet again',
                embed:{
                    image:'https://i.pinimg.com/564x/f9/29/40/f9294032e66d1ceed852bd17f2389319.jpg',
                    footer:'powered by otakusan.net'
                }},
        ],
        cmd: 'soloyasuoAnswer'
    },
    {
        keys:['gay'],
        conditionResponses: [
            {
                condition:{
                    contents: ['you','os']
                },
                messages:[
                    { content:'mị là hầu gái xinh đẹp của liah-sama',
                        embed:{
                            image:'https://otakusan.net/Content/Img/anwser.jpg',
                            footer:'powered by otakusan.net'
                        }
                    },
                    { content:'mị là hầu gái siêu đáng yêu siêu cấp vũ trụ :33' },
                    { content:'kó' }
                ]
            },
            {
                condition:{
                    contents: ['liah']
                },
                messages:[
                    { content:'liah-sama siêu đẹp trai và thông minh tất nhiên là không gay'},
                    { content:'nồ, liah-sama siêu ngầu lồi' }
                ]
            }
        ],
        responses:[
            { content:'mài gay'},
            { content:'đang nhầm với <@978339533588430898> à'},
            { content:'tất nhiên là rất rất gay'},
            { content:'geiiiiiiiiiii'}
        ],
        cmd: 'gayAnswer'
    },
    {
        keys:['đẹp trai'],
        conditionResponses: [
            {
                condition:{
                    contents: ['bạn']
                },
                messages:[
                    { content:'chuyện <:blob_lenny:560487919215837196>'},
                    { content:'dăm pa cây cỏ ven đường mà đòi với được mây' }
                ]
            },
            {
                condition:{
                    contents: ['mình']
                },
                messages:[
                    { content:'êy bạn ơi, sao có con ếch trong gương này <:pepe_xi:589295950875590657>'},
                    { content:'bạn là nhứt!' },
                    { content:'tỉnh dậy bạn êy' },
                    { content:'dm, trưa rồi còn ngủ mớ à' },
                ]
            }
        ],
        cmd: 'selfieAnswer'
    },
    {
        keys:['mức độ','độ ngu', 'cấp độ'],
        responses:[
            { content:'max cây'},
            { content:'đỉnh của chóp, nhưng chóp ở đáy đại dương'},
            { content:'Hỏi còn ngu nữa thì sau này làm được gì.'},
            { content:'ngoo ngọc'}
        ],
        cmd: 'levelAnswer'
    },
    {
        keys:['thông minh','là nhất'],
        conditionResponses: [
            {
                condition:{
                    contents: ['bạn']
                },
                messages:[
                    { content:'chuyện =]]]'},
                    { content:'dăm pa cây cỏ ven đường mà đòi với được mây <:blob_lenny:560487919215837196>' }
                ]
            },
            {
                condition:{
                    contents: ['mình']
                },
                messages:[
                    { content:'Con cua đỏ dài 10 cm chạy đua với con cua xanh dài 15cm. Con nào chạy về đích trước?'},
                    { content:'một bà mang 500k đi mua đồ ăn, mua 100 ớt và mua hết 400k tiền gà, vậy sao bà đi taxi về' },
                    { content:'ừ, thông khá là đau nhưng chắc thằng minh nó sướng' },
                ]
            }
        ],
        responses:[
            { content:'tại bạn ngu thôi'},
            { content:'mị không nhất thì ai nhất'},
            { content:'ăn thêm muối iot cho bằng mị nhé'},
        ],
        cmd: 'smartAnswer'
    },
    {
        keys:['mình ngu lắm','os ngu lắm','ngu à', 'bạn ngu lắm'],
        responses:[
            { content:'mài ngu lắm' },
            { content:'ừ, bạn ngu đó' }
        ],
        cmd: 'stupidfAnswer'
    },
    {
        keys:['nói tiếng việt'],
        responses:[
            { content:'ngộ tả nị xả' },
            { content:'yamate, yamate ku da sai' },
            { content:'thử nhập discordJS.Bot.Ossan.setLang(vn)' }
        ],
        cmd: 'sayVietnameseAnswer'
    },
    {
        keys:['sai rồi'],
        responses:[
            { content:'Mị không sai, yamatekuda sai' },
            { content:'Chắc chưa?' }
        ],
        cmd: 'toWrongAnswer'
    },
    {
        keys:['trùm là ai','boss là ai'],
        responses:[
            { content:'xời mị chứ ai' },
            { content:'who is your daddy' },
            { content:'thì là boss chứ boss không phải là boss thì boss không phải là boss à' }
        ],
        cmd: 'whoisBossAnswer'
    },
    {
        keys:['discordJS.Bot.Ossan.setLang(vn)'],
        responses:[
            { content:'=]] ngu lắm bạn ạ' },
            { content:'ok, chúc mừng bạn đã thành hacker' },
            { content:'quéo đùn, quéo đùn' }
        ],
        cmd: 'troll1Answer'
    },
    {
        keys:['mình ngu lắm','os ngu lắm'],
        responses:[
            { content:'mài ngu lắm' },
            { content:'bạn ngu lắm' }
        ],
        cmd: 'stupidfAnswer'
    },
    {
        keys:['ngu','đần'],
        conditionResponses: [
            {
                condition:{
                    contents: ['liah']
                },
                messages:[
                    { content:'liah-sama siêu đẹp trai siêu ngầu lòi'},
                    { content:'cỏ ven đường mà đòi với tới mây?' }
                ]
            }
        ],
        responses:[
            { content:'không ai ngok ngek bằng bạn'},
            { content:'bạn muốn đỡ đần không?'},
            { content:'người thông minh luôn thấy mình ngu và người ngu luôn thấy mình thông minh.'},
            { content:'giống thằng ở trên ☝️'},
            { content:'Hỏi còn ngu nữa thì sau này làm được gì.'}
        ],
        cmd: 'stupidAnswer'
    },
    {
        keys:['simp','smip','wibu','shrimp'],
        responses:[
            { content:'giờ cứ mỗi 50 mét thì có 1 thằng wibu'},
            { content:'thời đại nào rồi, 10 thằng thì hết 9 thằng wibu, thằng còn lại geiii'},
            { content:'simp có simp đít simp đát, wibu có wibu chúa wibu lọt'},
            { content:'đến Elon Musk còn wibu thì ta simp có há gì'},
            { content:'wibu là nghệ thuật và các simp là một ghệ sĩ nhưng... ngu'},
            { content:'bố là simp đấy thì sao nào'},
            { content:':? thế giới này là của ai :? và ai có quyền đi với ai :?'}
        ],
        cmd: 'simpAnswer'
    },
    {
        keys:['love you','yêu em','thương em','yêu anh','thương anh', 'yêu ai', 'hug '],
        responses:[
            { content:'Em yêu anh ><'},
            { content:'thương thương'},
            { content:'mãi bên nhau anh nhé'},
            { content:'mãi bên nhau "bạn" nhé'},
            { content:'em 💞 thương nhiều 💞 anh'},
            { content:'hihi, ghét quá à'},
            { content:'tới luôn anh ơi'},
            { content:'love you 3000'}
        ],
        cmd: 'loveAnswer'
    },
    {
        keys:['ngủ ngon','ngủ đi','ngủ nhé'],
        responses:[
            { content:'ứ ừ, không ngủ đâu'},
            { content:'ngủ nè huhuhu'},
            { content:'ngủ ngon nè'},
            { content:'ngủ cùng em nhé'},
            { content:'chủ nhân đi cùng em nào'}
        ],
        cmd: 'goodnightAnswer'
    },
    {
        keys:['gender bender'],
        conditionResponses: [
            {
                condition:{
                    contents: ['không']
                },
                messages:[{
                    content:'ngu à, mị là hầu gái',
                },
                {
                    content:'học lớp mấy rồi ku, không hiểu chữ hầu gái à'
                },
                {
                    content:'ai biết, mị là gái nhưng biết đâu ở dưới nó lại có gì đó'
                }]
            }],
        cmd: 'stupidQuestionAnswer'
    },
    {
        keys:['sao không trả lời','khinh à','khinh nhau à','khinh tao à','khinh bố à'],
        responses:[
            { content:'không có gì khinh bỉ hơn im lặng'},
            { content:'đó là mị éo biết trả lời sao đó'},
            { content:'là cạn lời, ngu ạ'},
            { content:'thì nói nè, ok chưa <:m_zjt:774258913285636157>'}
        ],
        cmd: 'noAnswer'
    },
    {
        keys:['ảnh liah','ảnh os'],
        responses:[
            { 
                embed:{
                    image:'https://otakusan.net/Content/Img/tifa.jpg',
                    footer:'powered by otakusan.net'
                }
            },
        ],
        cmd: 'liahPicAnswer'
    },
    {
        keys:['sendnude'],
        responses:[
            { content:'nude cc :v'},
            { content:'<:paimon_shock:773734330911555624>'},
            { 
                embed:{
                    image:'https://otakusan.net/Content/Img/sendnude1.jpg',
                    footer:'powered by otakusan.net'
                }
            },
            { 
                embed:{
                    image:'https://otakusan.net/Content/Img/sendnude2.jpg',
                    footer:'powered by otakusan.net'
                }
            },
            { 
                embed:{
                    image:'https://otakusan.net/Content/Img/sendnude3.jpg',
                    footer:'powered by otakusan.net'
                }
            },
            { 
                embed:{
                    image:'https://otakusan.net/Content/Img/sendnude4.jpg',
                    footer:'powered by otakusan.net'
                }
            },
        ],
        cmd: 'sendnudeAnswer'
    },
    {
        keys:['mắng', 'chửi', 'phạt'],
        responses:[
            { content:'dm, ngu lắm con ạ'},
            { content:'em là hầu gái dễ thương tốt bụng, không mắng ai bao h'},    
            { content:'Never Give Up nha, N-G-U'},       
            { content:'chửi làm loằn gì ạ, éo khá nổi âu'},   
            { content:'bạn ngu lắm, à hông bạn kia ngu lắm'},   
            { content:'dm, người ta ngoan hiền, cứ bắt phải chửi là thế nào'},
        ],
        cmd: 'giveshitAnswer'
    },
    {
        keys:['khen'],
        responses:[
            { content:'hihi ngài giỏi nhứt ạ'},
            { content:'bạn là nhứt'},    
            { content:'ngu nhất ạ!!'},   
            { content:'ngu NHẤT ạ!!'},     
        ],
        cmd: 'givegoodAnswer'
    },
    {
        keys:['bắn pháo', 'pháo hoa', 'congratulation', 'chúc mừng'],
        responses:[
            { content:'🎊🎉🎉🎉🎉🎉🎊'},
            { content:'🥳👐🎊👐🥳'},    
            { content:'bụp bụp xì....'},       
            { content:'🎆🎆🎆🎆'},   
        ],
        cmd: 'congratulationAnswer'
    },
    {
        responses:[
            { content:'không' },
            { content:'khum!!!' },
            { content:'không biết' },
            { content:'nồ' },
            { content:'kó' },
            { content:'vầng ạ' },
        ],
        cmd: 'yesNoAnswer'
    },
]