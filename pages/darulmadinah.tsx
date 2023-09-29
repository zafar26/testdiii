import Menus from "../components/Menu/menu";

const darulmadinah = () => {
    const profile = "digital/darul-madina.jpeg";
    const name = "Darul Madina (English School)";
    const title = "";
    const menus = [
        {
            'name' : 'Instagram',
            'link' : 'https://www.instagram.com/darulmadinahhind',
        },
        {
            'name' : 'Facebook',
            'link' : 'https://www.facebook.com/DarulMadinahIndia',
        },
        {
            'name' : 'Youtube',
            'link' : 'https://www.youtube.com/@darulmadinahindia5669',
        },
        {
            'name' : 'Twitter',
            'link' : 'https://twitter.com/DarulmadinahIND',
        },
        {
            'name' : 'LinkedIn',
            'link' : 'https://in.linkedin.com/company/darul-madinah',
        },
        {
            'name' : 'Website',
            'link' : 'https://darulmadinah.edu.in/',
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

export default darulmadinah;
