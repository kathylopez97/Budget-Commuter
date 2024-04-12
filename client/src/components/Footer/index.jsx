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
        <Breadcrumb.Item href="">heres</Breadcrumb.Item>
        <Breadcrumb.Item href="">
          something
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Coming Soon</Breadcrumb.Item>
      </Breadcrumb>
    );
  }

export default Footer;