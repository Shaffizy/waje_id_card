import profile from "./images/profile.jpg"
import messages from "./images/messages.png"
import share from "./images/share.png"
import qrcode from "./images/qrcode.png"
import phone from "./images/phone.png"
import mail from "./images/mail.png"
import globe from "./images/globe.png"
import address from "./images/address.png"
import add from "./images/add.png"



function Grid(){
    return(
    <div className="grid">
      <button className="index1"><img src={phone} alt=""   /></button>
      <div className="index5">
        <p>+234 0000000000</p>
        <p>Mobile</p>
      </div>
      <button className="index2"><img src={mail} alt=""    /></button>
      <div className="index6">
        <p>info@wajesmart.com.</p>
        <p>Email</p>
      </div>
      <button className="index3"><img src={globe} alt=""   /></button>
      <div className="index7">
        <p>https://wwajesmart.com</p>
        <p>Website</p>
      </div>
      <button className="index4"><img src={address} alt="" /></button>
      <div className="index8">
        <p>16a George Omonubi St, Maroko, Lekki 106104, Lagos</p>
        <p>Address</p>
      </div>
    </div>
    )
}


export default function Content(){
    return(
        <main className="main">
            <div className="green">
                <p className="one">Waje Smart Solution</p>
                <p className="two">DIGITAL CARD</p>
            </div>
            <div className="image">
                <img src={profile} alt="" />
            </div>
            <div className="title">
                <p className="name">Adetayo Taiwo</p>
                <p className="occupation">Software Engineer</p>
            </div>
            <div className="icon">
                <button><img src={messages} alt="" /></button>
                <button><img src={share} alt="" /></button>
                <button><img src={qrcode} alt="" /></button>
            </div>
            <Grid/>
            <div className="green2">
                <button><img src={add} alt="" /></button>
                <p>Add to Content</p>
            </div>
        </main>

    )
}