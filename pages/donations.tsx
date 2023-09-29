import Menus from "../components/Menu/menu";

const donation = () => {
    const profile = "digital/dawateislami-logo-delhi-ijtema.png";
    const name = "Donations";
    const menus = [
        {
            'name' : 'All purpose',
            'link' : '/all-purpose-donation',
        },
        {
            'name' : 'Telethon',
            'link' : '/telethon',
        },
        {
            'name' : 'Tax Saving Donation',
            'link' : '/tax-saving-donation',
        },
        {
            'name' : 'GNRF',
            'link' : '/gnrf-donation',
        },
        {
            'name' : 'Langare Razawiyya (Niyaz)',
            'link' : '/niyaz-donation',
        },
        {
            'name' : 'Food Distribution',
            'link' : '/food-distribution'
        },
        {
            'name' : 'Books Library',
            'link' : '/donation-library',
        },
        {
            'name' : 'Taqseeme Rasail',
            'link' : '/books-distribution',
        }
    ];
    
    return(
    <div>
        <Menus menus={menus} profile={profile} name={name}/>
    </div>
    )
}
export default donation;
