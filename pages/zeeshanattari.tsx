import Menus from "../components/Menu/menu";

const zeeshanattari = () => {
    const profile = "digital/zeeshan-attari.png";
    const name = "Zeeshan Attari";
    const title = "Rukne Hind Mushawarat";
    const menus = [
        {
            'name' : 'Instagram',
            'link' : 'https://www.instagram.com/zeeshanahmed_attari/',
        },
        {
            'name' : 'Facebook',
            'link' : 'https://www.facebook.com/profile.php?id=100088016960825',
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

export default zeeshanattari;
