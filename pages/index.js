import Image from 'next/image'
import { useState } from 'react'

const renderList = [
  {
    name: '[andiv icon](https://ant.design/components/icon/)',
    path: '/api/v1/svg/icon',
    params: 'value;fill;size',
    image: {
      src: 'https://github-readme-svg.vercel.app/api/v1/svg/icon?value=ChromeFilled&fill=%235193FB&size=24px'
    }
  },
  {
    name: 'captcha',
    path: '/api/v1/svg/captcha',
    params: 'value;n;w',
    image: {
      src: 'https://github-readme-svg.vercel.app/api/v1/svg/captcha?value=Click%20here!%20https://icebreaker.top/&n=0&w=600'
    }
  },
  {
    name: 'qrcode',
    path: '/api/v1/svg/qrcode',
    params: 'value',
    image: {
      src: 'https://github-readme-svg.vercel.app/api/v1/svg/qrcode?value=https://www.icebreaker.top/'
    }
  },
]
export default function Home() {

  const [list] = useState(renderList)

  return (
    <div className="min-h-screen pt-3">

      <div className="container mx-auto flex justify-center">
        <div>
          <h1>Vercel Serverless Api To Generate Svg!</h1>
          <article className="prose prose-lg">

            <div className="border border-solid border-black  rounded">
              <div className="flex justify-between border-b border-solid border-black p-2">
                <div>Domain:https://github-readme-svg.vercel.app</div>
                <div>Version: v1</div>
              </div>
              <div className="p-2">
                <div className="grid grid-cols-4 gap-2">
                  <div>name</div>
                  <div>path</div>
                  <div>params</div>
                  <div>demos</div>
                </div>
                {
                  list.map(item => {
                    return <div key={item.path} className="grid grid-cols-4 gap-2">
                      <div>{item.name}</div>
                      <div>{item.path}</div>
                      <div>{item.params}</div>
                      <div>
                        <Image width={128} height={128} alt="blog" src={item.image.src} ></Image>
                      </div>
                    </div>
                  })
                }
              </div>

            </div>

          </article>
        </div>

      </div>
    </div>
  )
}
