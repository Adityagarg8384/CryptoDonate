import { stat, } from "../components/mainpage/First";
import {prop} from "../pages/otp";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }) {
  // const {add, setAdd}= useState(false);
  return (
    <div>{
      stat === false ?
      prop===false?
        <Component {...pageProps} />
        :
        <Layout>
        <Component {...pageProps} />
      </Layout>
        :
        <Layout>
          <Component {...pageProps} />
        </Layout>
    }
    </div>
    // <Layout>
    //       <Component {...pageProps} />
    //     </Layout>
  )
}
