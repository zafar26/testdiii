import Menus from "../components/Menu/menu";

const gnrf = () => {
    const profile = "digital/gnrf_logo.jpeg";
    const name = "GNRF (Welfare Wing)";
    const menus = [
        {
            'name' : 'Facebook',
            'link' : 'https://www.facebook.com/gnrfindia/',
        },
        {
            'name' : 'Instagram',
            'link' : 'https://www.instagram.com/gnrfindia/',
        },
        {
            'name' : 'Twitter',
            'link' : 'https://twitter.com/GnrfIndia',
        },
    ];
    return(
    <div>
        <Menus menus={menus} profile={profile} name={name}/>
    </div>
    )
}
export default gnrf;
