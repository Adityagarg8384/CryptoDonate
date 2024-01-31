import { stat } from "../components/mainpage/first";
import {Pag} from "../components/mainpage/second";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }) {
  // const {add, setAdd}= useState(false);
  return (
    <div>{
      stat === false ?
      Pag===false?
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
  )
}
