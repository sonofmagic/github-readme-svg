import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">

      <div className="container mx-auto">
        <div>
          <h1>Vercel Serverless Api To Generate Svg!</h1>
        </div>
        <article className="prose lg:prose-xl">
          <div>Domain:https://github-readme-svg.vercel.app</div>
          <div>Version: v1</div>

          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>path</th>
                <th>params</th>
                <th>demos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>qrcode</td>
                <td>/api/v1/svg/qrcode</td>
                <td>value</td>
                <td>
                  <Image layout="fill" alt="blog" src="https://github-readme-svg.vercel.app/api/v1/svg/qrcode?value=https://www.icebreaker.top/" ></Image>
                </td>
              </tr>
              <tr>
                <td>[antd icon](https://ant.design/components/icon/)</td>
                <td>/api/v1/svg/icon</td>
                <td>value;fill;size</td>
                <td>
                  <Image layout="fill" alt="blog" src="https://github-readme-svg.vercel.app/api/v1/svg/icon?value=ChromeFilled&fill=%235193FB&size=24px" ></Image>
                </td>
              </tr>
              <tr>
              </tr>
              <tr>
                <td>captcha</td>
                <td>/api/v1/svg/captcha</td>
                <td>value;n;w</td>
                <td>
                  <Image layout="fill" alt="blog" src="https://github-readme-svg.vercel.app/api/v1/svg/captcha?value=Click%20here!%20https://icebreaker.top/&n=0&w=600" ></Image>
                </td>
              </tr>
            </tbody>
          </table>

        </article>
      </div>
    </div>
  )
}
