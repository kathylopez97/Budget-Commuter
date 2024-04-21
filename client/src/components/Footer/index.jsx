// github icon and import css styling
import { ImGithub } from "react-icons/im";
const styles = {
    footerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "28px",
      color: "white",
    },
};
// returns Footer for resourcea information and how to contact us
const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Team Vintage Vibes</h5>
                <a href="https://github.com/kathylopez97/Budget-Commuter"className ="link-dark">Follow us</a><ImGithub />
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Resources</h5>
                <ul className="list-styled">
                    <a href="/termsandagreement"className ="link-dark">Terms and Agreements</a>
                    <div>
                        
                    </div>
                    <a href="/privacypolicy"className ="link-dark">Privacy Policy</a>
                   
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us </h5>
                <ul className="list-styled">
                    <a href="/contactus"className ="link-dark">Contact Us</a>
                
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 Copyright: Team Vintage Vibes
        <a href="https://github.com/kathylopez97/Budget-Commuter" className ="link-dark"> BudgetCommuters.com</a>
    </div>

</footer>

// export Footer
export default Footer;