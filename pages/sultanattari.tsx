import Menus from "../components/Menu/menu";

const sultanattari = () => {
    const profile = "digital/sultan-attari.png";
    const name = "Sultan Attari";
    const title = "Rukne Hind Mushawarat";
    const menus = [
        {
            'name' : 'Instagram',
            'link' : 'https://www.instagram.com/sultanattarialqadri/',
        },
        {
            'name' : 'Facebook',
            'link' : 'https://www.facebook.com/Imsultanattari?mibextid=ZbWKwL',
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

export default sultanattari;
