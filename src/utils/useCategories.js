import { useEffect, useState } from "react"

const useCategories = () => {

    const [Categories, setCategories] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch("https://m.bro4u.com/api/v2/category/categories", {
                "headers": {
                  "accept": "application/json, text/plain, */*",
                  "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
                  "content-type": "application/x-www-form-urlencoded",
                  "pf": "2",
                  "priority": "u=1, i",
                  "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
                  "sec-ch-ua-mobile": "?1",
                  "sec-ch-ua-platform": "\"Android\"",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-site": "same-origin",
                  "token": "abcde123",
                  "utoken": "0",
                  "cookie": "_ga=GA1.2.37022564.1727504856; _gid=GA1.2.19192074.1727504856; _gcl_au=1.1.1927280454.1727504856; _fbp=fb.1.1727504857018.935513110166947799; _clck=1956jlp%7C2%7Cfpl%7C0%7C1732; _ga=GA1.3.37022564.1727504856; _gid=GA1.3.19192074.1727504856; G_ENABLED_IDPS=google; _ga_ZE24TT0418=GS1.2.1727584042.3.1.1727584261.60.0.0; ci_session=kjj4bim3qj5jseg7lu4bujctu16d9ibd; _ga_ZE24TT0418=GS1.3.1727600311.4.1.1727600337.34.0.0; _clsk=o2dwuc%7C1727600337901%7C4%7C1%7Cr.clarity.ms%2Fcollect; _dc_gtm_UA-60009241-3=1; _uetsid=c0f5e7007d6211efb3a0875fa89ba5c9; _uetvid=c0f5e3a07d6211efb007612ac639e1ca",
                  "Referer": "https://m.bro4u.com/city/bangalore",
                  "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": "city_slug=bangalore",
                "method": "POST"
              });
            const result = await response.json();
            setCategories(result);
        }
        fetchCategories();
    },[]);

    return Categories;
}

export default useCategories;