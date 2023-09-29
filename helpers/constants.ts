export const breadcrumb = (str?: string, pageTitle?: string) => {
    let arr: { title: string; link: string }[] = [
        {
            title: 'Home',
            link: '/',
        },
    ]
    let routeName: any = {
        roohaniilaj: 'Roohani Ilaj',
        'weekly-booklet': 'Weekly Booklet',
        bookslibrary: 'Books Library',
        'weekly-speech': 'Weekly Speech',
        blog: 'Blog',
        department: 'Department',
        kids: 'Kids',
        media: 'Media',
        'islamic-sisters': 'Islamic Sisters',
        'about-us': 'About Us',
        'privacy-policy': 'Privacy Policy',
        'terms-and-condition': 'Terms & Condition',
        volunteer: 'Volunteer',
        'zakat-calculator': 'Zakat Calculator',
        quraan: 'Quraan',
        'online-courses': 'Online Courses',
        'fgn-channel': 'FGN Channel',
    }
    str?.split('/').map((d: any, i: number) => {
        if (d != '') {
            arr.push({
                title:
                    d in routeName
                        ? routeName[d]
                        : d && d.split('?')[0] in routeName
                        ? routeName[d.split('?')[0]]
                        : i == 2 && pageTitle
                        ? d.indexOf('lang=') != -1
                            ? pageTitle +
                              `  (${d.substr(d.indexOf('lang=') + 5, 2)})`
                            : pageTitle
                        : d,
                link: d,
            })
        }
    })
    return arr
}
