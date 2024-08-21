import BannerRight from './assets/banner-right.png'
import BannerLeft from './assets/banner-left.png'
import EngagementParty from './assets/engagement-party.jpg'
import McCleanWedding from './assets/mcclean-wedding.jpg'
import { Bars3Icon } from '@heroicons/react/24/solid'

import './App.css'

function App() {

  const sectionHeight = screen.availHeight*0.8

  const Header = () => {
    return (
      <div className='w-full relative'>
        <img src={BannerLeft} className='w-full' />
        {/* <Bars3Icon className="text-dark-green w-10 fixed right-0 top-0"/> */}
      </div>
    )
  }

  const conciergeIdeas = [
    { 
      name: "Old Town La Quinta", 
      link: "", 
      sublinks: [
        {
          name: "Nitroinfusions",
          note: "For the kids at heart",
          link: "https://maps.app.goo.gl/oMiDdKVWjHPvwP4k8"
        }
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
    },
    { 
      name: "Cliffhouse", 
      note: "Peak happy hour",
      link: "https://maps.app.goo.gl/PT7W6Jf28V2mmXXZ6", 
      sublinks: []
    },
    { 
      name: "Downtown Palm Springs", 
      link: "", 
      sublinks: [
        { 
          name: "Bootlegger Tiki", 
          note: "No corporate mai tais here",
          link: "https://maps.app.goo.gl/YjmUYqXhB1qwMTof9" 
        }, 
        { 
          name: "Las Palmas Brewing", 
          link: "https://maps.app.goo.gl/d1Zs3q5bCJSoHj9B7" 
        }
      ] 
    },
    { 
      name: "Castelli's Ristorante", 
      note: "Muey authentico", 
      link: "https://maps.app.goo.gl/cdz6ivtSMWn9ZbuE9", 
      sublinks: [] 
    },
    { 
      name: "The Nest", 
      link: "https://maps.app.goo.gl/9VjNW7xdRwQd9tpE7", 
      note: "Crazy clientele, arrive early", 
      sublinks: [] 
    },
  ]

  return (
    <div className='w-full'>
      <Header />
        <div className="flex flex-col justify-center items-center px-10" style={{ height: `${sectionHeight}px` }}>
          <div className="w-full mb-6">
            <h1 className='font-lindenHill text-dark-green text-left text-[60px]'>Kyle</h1>
            <h1 className='font-mrsSaintDelafield text-dark-green w-2/5 text-end leading-10'>and</h1>
            <h1 className='font-lindenHill text-dark-green w-full text-end'>McKenzie</h1>
          </div>
          <h2 className="font-lifeSavers text-dark-green text-[24px]">Saturday, October 12, 2024</h2>
        </div>
        <img src={BannerRight} />
        <div className="flex flex-col justify-between items-center px-10" style={{ height: `${sectionHeight}px` }}>
          <h2 className="text-[40px] text-dark-green">We're getting married!</h2>
          <div className='flex flex-col justify-around items-center flex-grow'>
            <div className='flex justify-around items-center'>
              <h3 className='text-dark-green text-[20px] w-1/2'>Welcome to our wedding website!</h3>
              <img src={EngagementParty} className="w-1/2 m-2" />
            </div>
            <div className='flex justify-around items-center'>
              <img src={McCleanWedding} className="w-1/2 m-2"/>
              <h3 className='text-dark-green text-[20px] w-1/2'>Check back here for updates on our big day</h3>
            </div>
          </div>
        </div>
      <img src={BannerLeft} />
      <div className="flex flex-col justify-between items-center" style={{ height: `${sectionHeight}px` }}>
          <h2 className="text-[40px] text-dark-green">Schedule</h2>
          <div className='flex flex-col justify-around items-center flex-grow'>
              <div className='flex flex-col items-center'>
                <h3 className='text-dark-green text-[18px] font-semibold'>Thursday, October 10</h3>
                <p className="text-dark-green">6pm</p>
                <p className="text-dark-green">Welcome party</p>
                <a href="https://www.google.com/travel/hotels/s/uxfcV4VaC6rTL16a8" target="_blank">Indian Wells Resort Hotel</a>
                <p className="text-dark-green">Poolside</p>
              </div>
              <div className='flex flex-col items-center text-dark-green'>
                <h3 className='text-[18px] font-semibold'>Friday, October 11</h3>
                <p>Free day</p>
                {/* <p>for ideas, check out<br/>the concierge section</p> */}
              </div>
              <div className='flex flex-col items-center text-dark-green'>
                <h3 className='text-[18px] font-semibold'>Saturday, October 12</h3>
                <p>3:30 pm<br/>Ceremony</p>
                <a href="https://maps.app.goo.gl/erf4rsvZWM3M4QTb8" target="_blank">Scott & Jan’s House</a>
                <p className='mt-2'>5 pm<br/>Cocktail hour and reception</p>
                <a href="https://maps.app.goo.gl/pnvHW19YYjHaFUgB8" target="_blank">Vicky’s of Santa Fe</a>
              </div>
          </div>
        </div>
      <img src={BannerRight} />
        <div className="flex flex-col justify-between items-center" style={{ height: `${sectionHeight}px` }}>
          <h2 className="text-[40px] text-dark-green">Registry</h2>
          <div className='flex-grow flex flex-col'>
            <div className="h-1/5"></div>
            <a 
              href="https://www.crateandbarrel.com/gift-registry/mckenzie-graham-and-kyle-andrews/r7166659" 
              className='text-[20px] mt-6' 
              target="_blank"
            >Crate & Barrel</a>
            <a 
              href="https://www.amazon.com/wedding/registry/1BH17SI7J5YMT" 
              className='text-[20px] mt-6' 
              target="_blank"
            >Amazon</a>
            <a 
              href="https://venmo.com/code?user_id=1500996287070208159&created=1724128318.95329@printed=1" 
              className='text-[20px] mt-6' 
              target="_blank"
            >Honeymoon Fund</a>
          </div>
        </div>
      <img src={BannerLeft} />
      <div className="flex flex-col items-center px-10">
        <h2 className="text-[40px] text-dark-green">Concierge</h2>
        <div className='w-full flex flex-col items-start'>
          {conciergeIdeas.map(idea => {
            return <div className="mb-6 flex flex-col items-start">
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
      <img src={BannerRight} />
      {/* <img src={BannerLeft} />
      <img src={BannerRight} /> */}

    </div>
  )
}

export default App
