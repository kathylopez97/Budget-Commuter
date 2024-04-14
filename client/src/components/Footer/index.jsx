import Breadcrumb from 'react-bootstrap/Breadcrumb';

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

function Footer() {
    return (
      <Breadcrumb style={styles.footerStyle}>
        <Breadcrumb.Item href="">Terms and Agreements</Breadcrumb.Item>
        <Breadcrumb.Item href="">
          Privacy Policy
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">Contact Us</Breadcrumb.Item>
      </Breadcrumb>
    );
  }

export default Footer;