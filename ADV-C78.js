
var images = ['https://scontent.fdel3-1.fna.fbcdn.net/v/t1.18169-9/12400619_1050108755040477_1187891413588026764_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Flwl5_4m5PoAX-R_7ov&tn=Bnc8qOFHqWXpNsTx&_nc_ht=scontent.fdel3-1.fna&oh=9d21494c34b34a2c53d8602b0c48d184&oe=61241C3B',
    'https://scontent.fdel3-2.fna.fbcdn.net/v/t1.18169-9/12507430_1050109265040426_4195797698117606809_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=jqsLk2M3Dg0AX_VHb1j&tn=Bnc8qOFHqWXpNsTx&_nc_ht=scontent.fdel3-2.fna&oh=7f9db745755f84a9cdc15a640b0ca0fe&oe=6122A810',
    'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.6435-9/76726006_10157964730778534_2046039058794151936_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ldSJwFCDidwAX8fl6oj&_nc_ht=scontent.fdel3-1.fna&oh=17253711f1a4a9886dc023e78935d4cb&oe=61230062',
    'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.18169-9/23795466_10156020781758534_8199610023402664439_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=uI23U0uUINkAX_clyNe&_nc_ht=scontent.fdel3-1.fna&oh=51ddc67ffb20fa19113f0be214330280&oe=6123DB62',
    'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.6435-9/73364332_763193990863474_9204010204025323520_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=z3UPXhlymdwAX9NaoKe&tn=Bnc8qOFHqWXpNsTx&_nc_ht=scontent.fdel3-1.fna&oh=e599765e0a5fedb24bd0574503909ed4&oe=6123F285',
    'https://scontent.fdel3-2.fna.fbcdn.net/v/t1.6435-9/199208049_316986949958936_805554090878802033_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lfrsAm-IDZUAX8XBVMg&_nc_ht=scontent.fdel3-2.fna&oh=8dfc38fa4f796037ac5f993ea0f1437e&oe=612160E0'
];

var names = ["Papa AKA Manoj Sharma", "Mummy AKA Shikha Sharma", "Gunna AKA Vidhi Sharma", "Nanu AKA Future ELON MUSK AKA Pratham Sharma", "NANA JI AKA Retired Bank manager at PNB BANK", "NANI AKA Savita Gupta"];

// This is the for loop for changing the image and names 

var i = 0;

function update() {
    i++;
    var number_of_family_member_in_array = 6
    if (i > number_of_family_member_in_array ) {
        i = 0
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_Memeber_Image").src = updatedImage;
    document.getElementById("family_Member_Name").innerHTML = updatedName;
    console.log(updatedName + " Done and Checked");
    console.log(updatedImage + " Done and Checked")
}