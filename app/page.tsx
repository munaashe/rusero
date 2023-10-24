import Banner from './components/landingComponents/Banner'
import Projects from './components/landingComponents/Projects'
import FreelanceWork from './components/landingComponents/FreelanceWork'
import SocialCauses from './components/landingComponents/SocialCauses'

export default function Home() {
  return (
    <main className='antialiased min-h-screen overflow-x-hidden' >
      <Banner />
      <Projects />
      <FreelanceWork />
      <SocialCauses />
    </main>
  )
}
