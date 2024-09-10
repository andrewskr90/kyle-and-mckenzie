import BannerRight from './assets/banner-right.png'
import BannerLeft from './assets/banner-left.png'
import BannerRightDesktop from './assets/banner-right-desktop.png'
import BannerLeftDesktop from './assets/banner-left-desktop.png'
import EngagementParty from './assets/engagement-party.jpg'
import McCleanWedding from './assets/mcclean-wedding.jpg'
import { isMobile  } from 'react-device-detect'
import { Bars3Icon } from '@heroicons/react/24/solid'

import './App.css'
import { twMerge } from 'tailwind-merge'

function App() {

  const sectionHeight = screen.availHeight*0.8

    const Banner = (props) => {
    const { side } = props
    const bannerSrc = 
      isMobile 
        ? side === 'right'
          ? BannerRight 
          : BannerLeft
        : side === 'right'
          ? BannerRightDesktop
          : BannerLeftDesktop
    return (
      <img className='w-full' src={bannerSrc} />
    )
  }

  const Header = () => {
    return (
      <div className='w-full relative'>
        
        <Banner side={'left'} />
        {/* <Bars3Icon className="text-dark-green w-10 fixed right-0 top-0"/> */}
      </div>
    )
  }

  const conciergeIdeas = [
    {
      name: "Indian Wells",
      link: "",
      sublinks: [
        { 
          name: "Cliffhouse", 
          note: "Peak happy hour",
          link: "https://maps.app.goo.gl/PT7W6Jf28V2mmXXZ6", 
          sublinks: []
        },
        {
          name: "IW Coffee",
          note: "If not here, then it's Starbucks",
          link: "https://maps.app.goo.gl/anwnz6mWhVp4zXHKA",
          sublinks: []
        },
        { 
          name: "The Nest", 
          link: "https://maps.app.goo.gl/9VjNW7xdRwQd9tpE7", 
          note: "Crazy clientele, arrive early", 
          sublinks: [] 
        },
        {
          name: "Living Desert Zoo and Gardens",
          note: "",
          link: "https://maps.app.goo.gl/WLA3KXvABY6f1yQG7",
          sublinks: []
        },
        { 
          name: "Castelli's Ristorante", 
          note: "Muey authentico", 
          link: "https://maps.app.goo.gl/cdz6ivtSMWn9ZbuE9", 
          sublinks: [] 
        },
      ]
    },
    { 
      name: "Old Town La Quinta", 
      link: "", 
      sublinks: [
        {
          name: "La Quinta Brewing Co.",
          note: "",
          link: "https://maps.app.goo.gl/xK1oNWiXZftggkVn7",
          sublinks: []
        },
        {
          name: "Nitroinfusions",
          note: "For the kids at heart",
          link: "https://maps.app.goo.gl/oMiDdKVWjHPvwP4k8"
        }
      ] 
    },
        { 
      name: "Downtown Palm Springs", 
      link: "", 
      sublinks: [
        {
          name: "Melvyn's",
          note: "at the Ingleside Estate",
          link: "https://maps.app.goo.gl/4WDWxcJgHozdJGD66",
          sublinks: []
        },
        { 
          name: "Bootlegger Tiki", 
          note: "No corporate mai tais here",
          link: "https://maps.app.goo.gl/YjmUYqXhB1qwMTof9" 
        }, 
        {
          name: "Sherman's Deli & Bakery",
          note: "Old school deli",
          link: "https://maps.app.goo.gl/ZMn6HcjcvRoKrAxd6",
          sublinks: []
        },
        { 
          name: "Las Palmas Brewing", 
          link: "https://maps.app.goo.gl/d1Zs3q5bCJSoHj9B7" 
        },
        {
          name: "Palm Springs Aerial Tramway",
          note: "",
          link: "https://maps.app.goo.gl/LJX3fZngqUcXw6Lw6",
          sublinks: []
        },
      ] 
    },
    { 
      name: "Golf", 
      link: "", 
      sublinks: [
        { name: "Indian Wells Golf Resort", link: "https://www.indianwellsgolfresort.com/book_tt" }
      ] 
    },
    { 
      name: "Local hikes", 
      link: "", 
      sublinks: [
        { 
          name: "Bump & Grind", 
          note: "Our first hike together!", 
          link: "https://maps.app.goo.gl/vo2UbRLPjLtBeH727" 
        }
      ] 
    },
    { 
      name: "Joshua Tree", 
      note: "Get a date shake",
      link: "https://maps.app.goo.gl/aUnsJpajCXS7oU876", 
      sublinks: [
        { 
          name: "Pappy and Harriets", 
          note: "Pioneertown is cool",
          link: "https://maps.app.goo.gl/seyuXYsE5hHBw6k49" 
        }
      ] 
    }
  ]
  const Section = ({ children, className }) => {
    return (
      <div className={twMerge(isMobile ? "px-10" : "px-40", `flex flex-col justify-between items-center`, className)} style={{ height: `${sectionHeight}px` }}>
        {children}
      </div>
    )
  }

  const TextBlock = ({ children }) => {
    return (
      <div className={twMerge(isMobile ? "" : "w-1/2 h-1/2", 'flex flex-col items-center text-dark-green')}>
        {children}
      </div>
    )
  }

  return (
    <div className='w-full'>
      <Header />
        <Section className="justify-center">
        <div className={twMerge(isMobile ? "w-full" : "w-3/5", "mb-6")}>
          <h1 className='font-lindenHill text-dark-green text-left text-[60px]'>Kyle</h1>
          <h1 className='font-mrsSaintDelafield text-dark-green w-2/5 text-end leading-10'>and</h1>
          <h1 className='font-lindenHill text-dark-green w-full text-end text-[60px]'>McKenzie</h1>
        </div>
        <h2 className="font-lifeSavers text-dark-green text-[24px]">Saturday, October 12, 2024</h2>
      </Section>
      <Banner side={'right'} />
      <Section>
        <h2 className={twMerge( isMobile ? "" : "h-1/6", "text-[40px] text-dark-green flex flex-col justify-center")}>We're getting married!</h2>
        <div className={twMerge(isMobile ? 'flex-col' : 'flex-row h-5/6', 'flex justify-around items-center flex-grow')}>
          <div className={twMerge(isMobile ? 'flex-row' : 'w-1/2 flex-col-reverse h-full', 'flex justify-around items-center')}>
            <h3 className={twMerge(isMobile ? '' : '', 'text-dark-green text-[20px] w-1/2 flex flex-col justify-center')}>Welcome to our wedding website!</h3>
            <img src={EngagementParty} className={twMerge(isMobile ? "w-1/2" : "h-2/3", "m-2")} />
          </div>
          <div className={twMerge(isMobile ? 'flex-row' : 'w-1/2 flex-col h-full', 'flex justify-around items-center')}>
            <img src={McCleanWedding} className={twMerge(isMobile ? "w-1/2" : "h-2/3", "m-2")}/>
            <h3 className='text-dark-green text-[20px] w-1/2'>Check back here for updates on our big day</h3>
          </div>
        </div>
      </Section>
      <Banner side={'left'} />
      <Section>
        <h2 className="text-[40px] text-dark-green">Schedule</h2>
        <div className={twMerge(isMobile ? "flex-col justify-around items-center" : "flex-row justify-center items-start flex-wrap mt-10 h-5/6", 'flex flex-grow')}>
            <TextBlock>
              <h3 className='text-[18px] font-semibold'>Thursday, October 10</h3>
              <p>6pm</p>
              <p>Welcome party</p>
              <a href="https://www.google.com/travel/hotels/s/uxfcV4VaC6rTL16a8" target="_blank">Indian Wells Resort Hotel</a>
              <p>Poolside</p>
            </TextBlock>
            <TextBlock>
              <h3 className='text-[18px] font-semibold'>Friday, October 11</h3>
              <p>Free day</p>
              {/* <p>for ideas, check out<br/>the concierge section</p> */}
            </TextBlock>
            <TextBlock>
              <h3 className='text-[18px] font-semibold'>Saturday, October 12</h3>
              <p>3:30 pm<br/>Ceremony</p>
              <a href="https://maps.app.goo.gl/erf4rsvZWM3M4QTb8" target="_blank">Scott & Jan’s House</a>
              <p className='mt-2'>5 pm<br/>Cocktail hour and reception</p>
              <a href="https://maps.app.goo.gl/pnvHW19YYjHaFUgB8" target="_blank">Vicky’s of Santa Fe</a>
            </TextBlock>
        </div>
      </Section>
      <Banner side={'right'} />
      <Section>
        <h2 className="text-[40px] text-dark-green">Registry</h2>
        <div className={twMerge(isMobile ? "text-[20px]" : "text-[24px]", 'flex-grow flex flex-col')}>
          <div className="h-1/5"></div>
          <a 
            href="https://www.crateandbarrel.com/gift-registry/mckenzie-graham-and-kyle-andrews/r7166659" 
            className='mt-6' 
            target="_blank"
          >Crate & Barrel</a>
          <a 
            href="https://www.amazon.com/wedding/registry/1BH17SI7J5YMT" 
            className='mt-6' 
            target="_blank"
          >Amazon</a>
          <a 
            href="https://venmo.com/code?user_id=1500996287070208159&created=1724128318.95329@printed=1" 
            className='mt-6' 
            target="_blank"
          >Honeymoon Fund</a>
        </div>
      </Section>
      <Banner side={'left'} />
      <div className="flex flex-col items-center px-10 w-full">
        <h2 className="text-[40px] text-dark-green">Concierge</h2>
        <div className={twMerge(isMobile ? "w-full flex-col items-start" : "w-4/5 flex-wrap my-12", 'flex')}>
          {conciergeIdeas.map(idea => {
            return <div className="mb-6 flex flex-col items-start w-1/3">
              {idea.link 
                ? <a className="text-xl font-semibold" href={`${idea.link}`} target="_blank">{idea.name}</a>
                : <p className='text-dark-green font-semibold text-xl'>{idea.name}</p>}
              {idea.note && <p className='text-dark-green text-xs ml-2'>- "{idea.note}"</p>}
              <div className='flex flex-col items-start w-full ml-6'>
                {idea.sublinks.map(subIdea => {
                  return <div className='flex flex-col items-start'>
                    <a className="" href={`${subIdea.link}`} target="_blank">{subIdea.name}</a>
                    {subIdea.note && <p className='text-dark-green text-xs ml-2'>- "{subIdea.note}"</p>}
                  </div>
                })}
              </div>
            </div>
          })}
        </div>
      </div>
      <Banner side={'right'} />
    </div>
  )
}

export default App
