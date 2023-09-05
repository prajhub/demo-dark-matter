import HeroHome from '@/components/herohome'
import NinjaDesc from '@/components/ninjarundesc'
import WelcomeMain from '@/components/welcomemain'
import WorkTogether from '@/components/worktogether'
import ZImage from '@/components/zimage'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <HeroHome/>
      <WelcomeMain/>
      <NinjaDesc/>
      <WorkTogether/>
      
      </div>
  )
}
