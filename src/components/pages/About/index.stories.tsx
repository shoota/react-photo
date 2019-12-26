import React from 'react'

import { StoryLayout } from '../../templates/Layout/index.stories'

import { About } from '.'

export default { title: 'pages/About' }

const desc = [
  '1984年、青森県うまれ。',
  '学生時代はカメラと遺伝生物学をこよなく愛していましたが、なぜかカメラメーカーのエンジニアとして社会にでました。東日本大震災をきっかけに地元での暮らしを願うようになり、青森へ転職＆移住、現在はフルリモートワーカーとして自宅でエンジニアをしています。',
  '結婚後の育児優先で閉鎖した写真サイトをもういちどやりたくなったので最近ぽつぽつと写真を撮り始めています。',
  '３人の息子と1人の嫁さんと暮らしている。ねこがほしい。',
]

const profileDetails = [
  {
    icon: 'camera',
    title: '使用している主なカメラ',
    description:
      'Nikon FM10 / Nikon EM / Nikon D50 / OLYMPUS OM-D E-M10 Mark Ⅲ',
  },
  {
    icon: 'twitter',
    title: 'Twitter',
    link: 'https://google.co.jp',
    description: '技術と家族のことがほとんどです',
  },
  {
    icon: 'facebook',
    title: 'Facebook',
    description: 'あまり更新してませんが...',
  },
  {
    icon: 'github',
    title: 'Github',
    description: 'Webをメインにいろいろなものを書いています',
  },
  {
    icon: 'code-sandbox',
    title: 'Code Sandobox',
    link: 'https://codesandbox.io/u/shoota',
    description: '勉強が用の書き捨てコードやサンプルを置いています',
  },
]

export const withDefault = () => (
  <StoryLayout>
    <About
      name="shoota"
      avatarUrl="https://gist.github.com/shoota/9319742/raw/3d1a799e759fb548262cdf5484cc1a914e56e7bd/avt.jpg"
      profileDescriptions={desc}
      profileDetails={profileDetails}
    />
  </StoryLayout>
)
