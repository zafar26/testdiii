import Menus from "../components/Menu/menu";

const sayyedazamattari = () => {
    const profile = "digital/aazam-bapu.png";
    const name = "Sayyed Azam Attari";
    const title = "Rukne Hind Mushawarat";
    const menus = [
        {
            'name' : 'Instagram',
            'link' : 'https://www.instagram.com/zeeshanahmed_attari/',
        },
        {
            'name' : 'Facebook',
            'link' : 'https://www.facebook.com/Sayyedazamattari/?mibextid=ZbWKwL',
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

export default sayyedazamattari;
