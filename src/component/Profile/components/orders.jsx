
export const Order =() => {
    return(
        <div>
          <h1>سفارشات شما</h1>
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="#">جاری</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">تحویل داده شده</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">مرجوع شده</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">لغو شده</a>
        </li>
      </ul>
          <div className="mainData">
            <h4>تحویل داده شده </h4>
            <br></br>
            <span  className="spanStyle">1 خرداد 1400</span>
            <span className="spanSpace">-</span>
            <span  className="spanStyle">کد سفارش</span>
            <span className="spanSpace">-</span>
            <span  className="spanStyle">مبلغ سفارش</span>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="orderImg">
            <img src="assets/images/order/1.jpg" alt="سفارشات"/>
            <img/>
            <img/>
            <hr></hr>
            </div>
         </div>
       </div>
    )
}