import Menus from "../components/Menu/menu";

const sayedarifattari = () => {
    const profile = "digital/arifbapu.png";
    const name = "Sayed Arif Ali Attari";
    const title = "Nigraane Hind Mushawarat";
    const menus = [
        {
            'name' : 'Instagram',
            'link' : 'https://www.instagram.com/sayedarifattari',
        },
        {
            'name' : 'Facebook',
            'link' : 'https://www.facebook.com/sayedarifattari',
        },
        {
            'name' : 'Youtube',
            'link' : 'https://www.youtube.com/@SayedArifAttari',
        },
        {
            'name' : 'Twitter',
            'link' : 'https://twitter.com/SayedArifAttari',
        },
        {
            'name' : 'Whatsapp',
            'link' : 'https://chat.whatsapp.com/DdWkWICsAKd2HnBWrCE8Eb',
        },
        {
            'name' : 'Dawateislami India',
            'link' : '/digital',
        },
    
    ];
    
    return(
    <div>
        <Menus menus={menus} profile={profile} name={name} title={title}/>
    </div>
    )
}

export default sayedarifattari;
