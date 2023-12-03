export default function Footer() {
    return(
        <section className="footer">
            <div className="footer--information">
                <div className="company--name">
                    SHOP.COM
                </div>

                <div className="social--media">
                    <img src="./icons/facebook.svg" alt="facebook" className="social--media--icon" />
                    <img src="./icons/instagram.svg" alt="twitter" className="social--media--icon" />
                    <img src="./icons/tiktok.svg" alt="instagram" className="social--media--icon" />
                    <img src="./icons/twitter.svg" alt="tik tok" className="social--media--icon" />
                </div>

            </div>

                

            <div className="legal--stuff">
                <div>
                &copy; Copyright Shop.com pty LTD.
                </div>
                <div>This Is A Demo Website</div>
                <div>
                    All Rights Reserved Shop.com Is Not A Registered Entity. 
                </div>
                <div>
                    Privacy: POPIA ACT OF 2020 SOMETHING
                </div>
            </div>
                
        </section>
    )
}