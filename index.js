let obj={
    book1:'Javascript',
    book2:'Python',
    book3:'Ruby',
    book4:'Go',
    book5:'Languages',
    book6:'isChallenging',
    book7:'isRewarding',
    book8:'difficulty',
    book9:'isFun',
    books:[
        'Javascript','Python','Ruby','Go'
    ],
    book10:true,
    book11:7,
    book12:true
}
var keys = Object.keys(obj);
var filtered = keys.filter(function(key) {
    console.log( obj[key])
});
