import Menus from "../components/Menu/menu";

const digital = () => {
    const profile = "digital/dawateislami-logo-delhi-ijtema.png";
    const name = "Dawateislami India";
    const title = "Motto: I must strive to reform myself and the people of the entire world ان شاءاللہ";
    const menus = [
        {
            'name' : 'Download Neki Time App',
            'link' : 'https://play.google.com/store/apps/details?id=com.dawateislamiindia.nekitime',
        },
        {
            'name' : 'Donations',
            'link' : '/donations',
        },
        {
            'name' : 'GNRF (Welfare Wing)',
            'link' : '/gnrf',
        },
        {
            'name' : 'Qutubuddin Package',
            'link' : '/qutubuddin-package'
        },
        {
            'name' : 'Meeladi Package',
            'link' : '/meeladi-package'
        },
        {
            'name' : 'Instagram',
            'link' : 'https://www.instagram.com/dawateislamiindiaofficial',
        },
        {
            'name' : 'Youtube',
            'link' : 'https://www.youtube.com/@DawateislamiIndiaofficial',
        },
        {
            'name' : 'Facebook',
            'link' : 'https://www.facebook.com/dawateislamiIndiaofficial',
        },
        {
            'name' : 'Sayed Arif Ali Attari',
            'link' : '/sayedarifattari',
        },
        {
            'name' : 'Zeeshan Attari',
            'link' : '/zeeshanattari',
        },
        {
            'name' : 'Sayyed Azam Attari',
            'link' : '/sayyedazamattari',
        },
        {
            'name' : 'Sultan Attari',
            'link' : '/sultanattari',
        },
        {
            'name' : 'Website',
            'link' : 'https://dawateislamiindia.org',
        },
        {
            'name' : 'Telegram',
            'link' : 'https://t.me/dawateislamiindiaofficial/',
        },
        {
            'name' : 'Twitter',
            'link' : 'https://twitter.com/idawateislami',
        },
        {
            'name' : 'WhatsApp',
            'link' : 'https://api.whatsapp.com/send/?phone=918070252626&text&type=phone_number&app_absent=0',
        },
        {
            'name' : 'WhatsApp Group',
            'link' : 'https://chat.whatsapp.com/FemovNkTudD5bQTVa35Hwg',
        },
        {
            'name' : 'Maktaba Tul Madina',
            'link' : 'https://www.maktabatulmadina.in',
        },
        {
            'name' : 'Darul Madina (English School)',
            'link' : '/darulmadinah',
        },
        {
            'name' : 'FGN Channel',
            'link' : '/fgn-channel',
        },
    ];
    
    return(
    <div>
        <Menus menus={menus} profile={profile} name={name} title={title}/>
    </div>
    )
}

export default digital;
