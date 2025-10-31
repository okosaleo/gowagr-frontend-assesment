"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Anek } from "../utils/fonts"
import { Gloria } from "../utils/fonts"

interface Player {
  id: string
  name: string
  imageUrl: string
  position: string
  team: {
    id: string
  }
  number: string
}

interface Game {
  id: string
  startDate: string
  homeTeam: {
    id: string
    name: string
    nickname: string
  }
  awayTeam: {
    id: string
    name: string
    nickname: string
  }
}

interface Prop {
  betPoints: number
  type: string
}

interface PlayerProp {
  player: Player
  game: Game
  props: Prop[]
}

export default function Win() {
  const [playerData, setPlayerData] = useState<PlayerProp[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(
          'https://staging-api.squads.game/bet/public-props?marketType=player_shots_on_target&size=30'
        )
        const data = await response.json()
        // Get only the first 3 players
        setPlayerData(data.props.slice(0, 3))
        setLoading(false)
      } catch (error) {
        console.error('Error fetching player data:', error)
        setLoading(false)
      }
    }

    fetchPlayerData()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.toLocaleString('en-US', { month: 'short' })
    const time = date.toLocaleString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
    return { date: `${day}${getOrdinalSuffix(day)} ${month}`, time }
  }

  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return 'th'
    switch (day % 10) {
      case 1: return 'st'
      case 2: return 'nd'
      case 3: return 'rd'
      default: return 'th'
    }
  }

  const getTeamInfo = (player: Player, game: Game) => {
    const isHomeTeam = player.team.id === game.homeTeam.id
    const playerTeam = isHomeTeam ? game.homeTeam : game.awayTeam
    const opposingTeam = isHomeTeam ? game.awayTeam : game.homeTeam
    
    return {
      club: `${playerTeam.nickname}- ${player.position === 'F' ? 'Forward' : player.position === 'M' ? 'Midfielder' : player.position === 'D' ? 'Defender' : 'Keeper'}`,
      against: `${opposingTeam.nickname} on`
    }
  }

  return (
    <div className="bg-[url('/bgWin.png')] w-full min-h-screen h-fit bg-cover pb-20">
      <div className="absolute lg:-mt-3 -mt-8 lg:right-64 right-24">
        <Image src="/vecwin.png" alt="vector" width={84.1} height={71.77} />
      </div>

      {/* Desktop */}
      <div className="max-w-3xl mx-auto lg:flex hidden items-center flex-col gap-6">
        <div className="flex gap-3 mt-32">
          <div className="relative w-[73.16px] h-[64.51px] ">
            <Image src="/win1.png" alt="vector" fill />
          </div>
          <div className="relative w-[72.86px] h-[67.66px] ">
            <Image src="/win2.png" alt="vector" fill />
          </div>
          <div className="relative w-[73.16px] h-[64.51px] ">
            <Image src="/win3.png" alt="vector" fill />
          </div>
          <div className="relative w-[62.45px] h-[62.45px] ">
            <Image src="/win4.png" alt="vector" fill />
          </div>
        </div>

        {/* Head Text */}
        <div className="">
          <h1 className={`${Anek.className} text-[#141B23] text-center tracking-tight text-7xl`}>
            WIN UPTO 100X <br /> YOUR CASH, JUST PICK <br /> MORE OR LESS
          </h1>
        </div>

        {/* Image Section 1*/}
        <div className="flex justify-between w-full ">
          <div>
            <p className={`${Gloria.className} text-[#141B23] text-xl text-center`}>
              Pick more or less on <br /> your favorite players <br /> stats
            </p>
          </div>
          <div className="mt-10 -ml-16">
            <Image src="/arrow1.png" alt="arrow" width={251} height={114.39} />
          </div>
          <div className="flex flex-col items-start gap-2 -ml-16 mt-20">
            <div>
              <p className={`${Gloria.className} text-[#141B23] text-xl text-center`}>
                8 picks = <br />
              </p>
            </div>
            <div className="flex gap-2">
              <div>
                <p className={`${Anek.className} text-[#FD89ED] text-center tracking-tight text-4xl`}>
                  100x
                </p>
              </div>
              <div>
                <p className={`${Gloria.className} text-[#141B23] text-xl text-center`}>
                  Your entry <br /> Amount
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section 2 Players */}
        <div className="flex items-center gap-44">
          <div className="flex flex-col gap-4 rotate-6 -mt-14">
            {loading ? (
              <div className="text-white">Loading players...</div>
            ) : (
              playerData.map((playerProp) => {
                const { date, time } = formatDate(playerProp.game.startDate)
                const teamInfo = getTeamInfo(playerProp.player, playerProp.game)
                const normalProp = playerProp.props.find(p => p.type === 'NORMAL')
                
                return (
                  <div
                    key={playerProp.player.id}
                    className="bg-[#262F3B] w-[350px] h-[89px] rounded-lg p-3 flex gap-3"
                  >
                    <div className="flex gap-3 w-3/5">
                      <div className="relative w-[39.18px] h-[39.18px]">
                        <Image
                          src={playerProp.player.imageUrl || 'https://cdn.opticodds.com/player-logos/soccer/390852.png'}
                          alt="playerimage"
                          className="object-cover rounded-full"
                          fill
                        />
                      </div>
                      <div className="gap-2 flex flex-col">
                        {/* player card name, date and team */}
                        <div className="flex flex-col gap-0.5">
                          <p className="font-bold text-white text-[11px]">
                            {playerProp.player.name}
                          </p>
                          <p className="text-[#8F949A] font-medium text-[9px]">
                            {teamInfo.club}
                          </p>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <p className="text-[#D2D4D7] text-[8px]">
                            vs. {teamInfo.against}
                          </p>
                          <p className="text-[#D2D4D7] text-[8px]">
                            {date} {time}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1 w-2/5">
                      <div className="bg-[#20262E] px-2.5 py-2 rounded-sm w-1/2 flex flex-col justify-center items-center">
                        <p className="text-white font-bold">
                          {normalProp?.betPoints || '0.5'}
                        </p>
                        <p className="text-[#797F86] text-[8px] text-center">
                          Shots on Target
                        </p>
                      </div>
                      <div className="w-1/2 gap-1 flex flex-col">
                        <button className="bg-[#D0F091] rounded-xs p-2">
                          <div className="flex items-center justify-center gap-2">
                            <p className="text-[#20262E] text-[9px]">More</p>
                            <Image
                              src="/arrowup.svg"
                              alt="arrowUp"
                              width={6.4}
                              height={8.8}
                            />
                          </div>
                        </button>
                        <button className="bg-[#1F2935] rounded-xs p-2">
                          <div className="flex items-center justify-center gap-2">
                            <p className="text-white text-[9px]">Less</p>
                            <Image
                              src="/arrdown.png"
                              alt="arrowDown"
                              width={6.4}
                              height={8.8}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
          <div className="flex -mt-2 -ml-9 -rotate-3">
            <div className="flex flex-col gap-4 items-center">
              <div className="flex gap-5">
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-[#2A343F] text-xs">Entry Amount</p>
                  <div className="bg-[#141B23] py-[22.14px] px-[17.71px] w-32 rounded-sm">
                    <p className="text-[#D2D4D7]">₦1,000</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-[#2A343F] text-xs">Potential Payout</p>
                  <div className="bg-[#141B23] py-[22.14px] px-[17.71px] w-32 rounded-sm">
                    <p className="text-[#D2D4D7]">₦3,000</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 ml-6">
                <Image src="/arrow2.png" alt="arrow" width={33} height={112} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex ">
          <div className="flex flex-col">
            <Image
              src="/arrow3.png"
              alt="3rd Arrow"
              width={186.29}
              height={105.45}
            />
            <p className={`${Gloria.className} text-[#2A343F] text-lg`}>
              Withdraw your winnings
            </p>
          </div>
          <div className="-mr-16 -mt-9">
            <Image
              src="/winc.png"
              alt="WinImage"
              width={180.35}
              height={222.28}
            />
          </div>
        </div>
      </div>



      {/* Mobile */}
      <div className="lg:hidden flex items-center flex-col justify-center w-full">
        <div className="flex items-center justify-center flex-col gap-4">
           <div className="flex gap-3 mt-22">
              <div className="relative w-[42.88px] h-[37.87px] ">
                <Image src="/win1.png" alt="vector" fill />
              </div>
              <div className="relative w-[42.71px] h-[39.66px] ">
                <Image src="/win2.png" alt="vector" fill />
              </div>
              <div className="relative w-[42.88px] h-[37.87px] ">
                <Image src="/win3.png" alt="vector" fill />
              </div>
              <div className="relative w-[36.6px] h-[36.6px] ">
                <Image src="/win4.png" alt="vector" fill />
          </div>
          </div>
            <div className="">
                <h1 className={`${Anek.className} text-[#141B23] text-center tracking-tight text-4xl`}>
                   WIN UPTO 100X YOUR <br /> CASH, JUST PICK <br /> MORE OR LESS
                </h1>
            </div>
        </div>


        <div className="mt-6 p-5 flex-col gap-5 flex items-center justify-center">
           <div className="">
             <h2 className={`${Gloria.className} text-lg text-center text-[#2A343F]`}> Pick more or less on <br /> your favorite players <br /> stats</h2>
           </div>
           <div className="relative">
             <div className="absolute -mt-9 ml-49">
               <Image src="/mobarr1.png" alt="arrow" width={110.31} height={70.37} />
             </div>
             <div className="gap-3 flex flex-col rotate-6 z-10">
              {loading ? (
              <div className="text-white">Loading players...</div>
            ) : (
              playerData.map((playerProp) => {
                const { date, time } = formatDate(playerProp.game.startDate)
                const teamInfo = getTeamInfo(playerProp.player, playerProp.game)
                const normalProp = playerProp.props.find(p => p.type === 'NORMAL')
                
                return (
                  <div
                    key={playerProp.player.id}
                    className="bg-[#262F3B] w-[330px] h-[89px] rounded-lg p-3 flex gap-3"
                  >
                    <div className="flex gap-3 w-3/5">
                      <div className="relative w-[39.18px] h-[39.18px]">
                        <Image
                          src={playerProp.player.imageUrl || 'https://cdn.opticodds.com/player-logos/soccer/390852.png'}
                          alt="playerimage"
                          className="object-cover rounded-full"
                          fill
                        />
                      </div>
                      <div className="gap-2 flex flex-col">
                        {/* player card name, date and team */}
                        <div className="flex flex-col gap-0.5 ">
                          <p className="font-bold text-white truncate text-[11px]">
                            {playerProp.player.name}
                          </p>
                          <p className="text-[#8F949A] font-medium text-[9px]">
                            {teamInfo.club}
                          </p>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <p className="text-[#D2D4D7] truncate text-[8px]">
                            vs. {teamInfo.against}
                          </p>
                          <p className="text-[#D2D4D7] text-[8px]">
                            {date} {time}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1 w-2/5">
                      <div className="bg-[#20262E] px-2.5 py-2 rounded-sm w-1/2 flex flex-col justify-center items-center">
                        <p className="text-white font-bold">
                          {normalProp?.betPoints || '0.5'}
                        </p>
                        <p className="text-[#797F86] text-[8px] text-center">
                          Shots on Target
                        </p>
                      </div>
                      <div className="w-1/2 gap-1 flex flex-col">
                        <button className="bg-[#D0F091] rounded-xs p-2">
                          <div className="flex items-center justify-center gap-2">
                            <p className="text-[#20262E] text-[9px]">More</p>
                            <Image
                              src="/arrowup.svg"
                              alt="arrowUp"
                              width={6.4}
                              height={8.8}
                            />
                          </div>
                        </button>
                        <button className="bg-[#1F2935] rounded-xs p-2">
                          <div className="flex items-center justify-center gap-2">
                            <p className="text-white text-[9px]">Less</p>
                            <Image
                              src="/arrdown.png"
                              alt="arrowDown"
                              width={6.4}
                              height={8.8}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
             </div>
           </div>
        </div>



        <div className="flex flex-col items-center justify-center mt-22 gap-9">
          {/* Heading */}
          <div className="flex gap-3 items-center justify-center flex-col">
             <div >
             <h2 className={`${Gloria.className} text-lg text-center text-[#2A343F]`}>8 picks =</h2>
             </div>
             <div className="flex gap-2">
              <div>
                <p className={`${Anek.className} text-[#FD89ED] text-center tracking-tight text-4xl`}>
                  100x
                </p>
              </div>
              <div>
                <p className={`${Gloria.className} text-[#141B23] text-xl text-center`}>
                  Your entry <br /> Amount
                </p>
              </div>
            </div>
          </div>


          <div className=" -rotate-3">
            <div className="flex gap-5">
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-[#2A343F] text-xs">Entry Amount</p>
                  <div className="bg-[#141B23] py-[22.14px] px-[17.71px] w-32 rounded-sm">
                    <p className="text-[#D2D4D7]">₦1,000</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-[#2A343F] text-xs">Potential Payout</p>
                  <div className="bg-[#141B23] py-[22.14px] px-[17.71px] w-32 rounded-sm">
                    <p className="text-[#D2D4D7]">₦3,000</p>
                  </div>
                </div>
              </div>
          </div>


          <div className="ml-18 -mt-4">
            <Image src="/mobarr2.png" alt="arrimage" width={120} height={30} />
          </div>
        </div>


        
        <div className="flex flex-col items-center justify-center -rotate-8 mb-19">
          <div>
            <h2 className={`${Gloria.className} text-lg text-center text-[#2A343F]`}> Withdraw <br /> your winnings</h2>
          </div>
          <div className="rotate-17">
            <Image
              src="/winc.png"
              alt="WinImage"
              width={240.35}
              height={222.28}
            />
          </div>
        </div>
      </div>
    </div>
  )
}