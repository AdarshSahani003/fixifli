import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import HowItWorks from './HowItWorks';
import HowToUse from './HowToUse';
import Feedbacks from './Feedbacks';

const Body = () => {

  const [HomeCategories, useHomeCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://bro4u.com/api/v2/home/home_screen_data", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
          "content-type": "application/x-www-form-urlencoded",
          "pf": "1",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "token": "abcde123",
          "utoken": "e7351eb7-7d66-11ef-b275-02e22721e6f5",
          "cookie": "_ga=GA1.2.37022564.1727504856; _gid=GA1.2.19192074.1727504856; _gcl_au=1.1.1927280454.1727504856; _fbp=fb.1.1727504857018.935513110166947799; _clck=1956jlp%7C2%7Cfpl%7C0%7C1732; ci_session=792sfjamitvaono4fd48a03m8k7l9es1; _uetsid=c0f5e7007d6211efb3a0875fa89ba5c9; _uetvid=c0f5e3a07d6211efb007612ac639e1ca; _ga_ZE24TT0418=GS1.2.1727622550.5.1.1727622550.60.0.0; _clsk=xjuk00%7C1727622813258%7C4%7C1%7Cr.clarity.ms%2Fcollect",
          "Referer": "https://bro4u.com/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "cat_id=&city_id=1&pincode=&type=1&vendor_id=",
        "method": "POST"
      });

    const json = await data.json();
    useHomeCategories(json);
    }
    fetchData();
  }, [])

  // console.log(HomeCategories);

  return (
    <div className="flex flex-col items-center max-w-screen-lg mx-auto min-w-screen-sm py-2 px-4">
      {/* Services Section */}
    <section className='mb-4'>
    <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
    <div className="flex flex-wrap gap-x-2 gap-y-2.5 justify-between">
        {HomeCategories?.categories.map((service) => (
        <ServiceCard key={service.cat_id} {...service} />
        ))}
    </div>
    <Link to="/services" className="mt-4 text-blue-600 hover:underline cursor-pointer">
    <button className='mt-8 bg bg-blue-700 hover:bg-blue-800 text-white w-32 h-10 rounded-sm border-none'>Explore Services</button>
    </Link> {/* Add this line */}
    </section>


   
      <section className="mt-8">
      <HowToUse />
      <HowItWorks />
      <Feedbacks />
      </section>
    </div>
  );
};

export default Body;