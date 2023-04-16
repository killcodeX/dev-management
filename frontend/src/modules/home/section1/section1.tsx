import React from 'react';
import {BsCart2, BsCollection, BsPerson, BsPieChart} from "react-icons/bs"
let data1 = [
    {
      id: 1,
      cardCategory: "Number of Sales",
      cardNumber: 20536,
      lastSale: 3.48,
      icon:`BsCart`,
    },
    {
      id: 2,
      cardCategory: "New Products",
      cardNumber: 94356,
      lastSale: 1.92,
      icon:`BsCollection`,
    },
    {
      id: 3,
      cardCategory: "New Users",
      cardNumber: 1253,
      lastSale: 1.27,
      icon:`BsPerson`,
    },
    {
      id: 4,
      cardCategory: "Revenue",
      cardNumber: 2384,
      lastSale: 6.92,
      icon:`BsPieChart`,
    },
  ];



export default function section1() {
  return (
    <section className="dashboard-home-section-1">
          <div className="row">
            {data1.map((item) => {
              return (
                <div className="col-sm-3" key={item.id}>
                  <div className="card dashboard-card flex-ds-row p-4 mb-3">
                    <div className="dashboard-home-section-1-left">
                      <div className="card-label fw-bold pb-2">{item.cardCategory}</div>
                      <div className="fs-4 me-2 lh-1 ls-n2 pb-2">{item.cardNumber}</div>
                      <div className="last-sale fs-7"><span className='text-success'>{item.lastSale}%</span> (Since last month)</div>
                    </div>
                    <div className="dashboard-home-section-1-right fs-2">
                      {item.icon === 'BsCart'? <BsCart2/>:null}
                      {item.icon === 'BsCollection'? <BsCollection/>:null}
                      {item.icon === 'BsPerson'? <BsPerson/>:null}
                      {item.icon === 'BsPieChart'? <BsPieChart/>:null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
  )
}
