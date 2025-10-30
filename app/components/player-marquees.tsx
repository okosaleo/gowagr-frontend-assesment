"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Marquee from "react-fast-marquee"

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

export default function PlayerMarquees() {
  const [playerData, setPlayerData] = useState<PlayerProp[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(
          'https://staging-api.squads.game/bet/public-props?marketType=player_shots_on_target&size=30'
        )
        const data = await response.json()
        // Get only the first 9 players
        setPlayerData(data.props.slice(0, 9))
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

  // Split players into groups of 3
  const marquee1Players = playerData.slice(0, 3)
  const marquee2Players = playerData.slice(3, 6)
  const marquee3Players = playerData.slice(6, 9)

  const PlayerCard = ({ playerProp }: { playerProp: PlayerProp }) => {
    const { date, time } = formatDate(playerProp.game.startDate)
    const teamInfo = getTeamInfo(playerProp.player, playerProp.game)
    const normalProp = playerProp.props.find(p => p.type === 'NORMAL')

    return (
      <div
        className="bg-[#262F3B] w-[450px] h-[110px] rounded-lg p-4 flex gap-4 mx-6 border-2 border-transparent hover:border-[#D0F091] transition-colors duration-300"
      >
        <div className="flex gap-4 w-3/5">
          <div className="relative w-[50px] h-[50px]">
            <Image
              src={playerProp.player.imageUrl || 'https://cdn.opticodds.com/player-logos/soccer/390852.png'}
              alt="playerimage"
              className="object-cover rounded-full"
              fill
            />
          </div>
          <div className="gap-2 flex flex-col">
            <div className="flex flex-col gap-0.5">
              <p className="font-bold text-white text-[13px]">
                {playerProp.player.name}
              </p>
              <p className="text-[#8F949A] font-medium text-[10px]">
                {teamInfo.club}
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[#D2D4D7] text-[9px]">
                vs. {teamInfo.against}
              </p>
              <p className="text-[#D2D4D7] text-[9px]">
                {date} {time}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 w-2/5">
          <div className="bg-[#20262E] px-3 py-2 rounded-sm w-1/2 flex flex-col justify-center items-center">
            <p className="text-white font-bold text-lg">
              {normalProp?.betPoints || '0.5'}
            </p>
            <p className="text-[#797F86] text-[9px] text-center">
              Shots on Target
            </p>
          </div>
          <div className="w-1/2 gap-1.5 flex flex-col">
            <button className="bg-[#D0F091] rounded-xs p-2.5">
              <div className="flex items-center justify-center gap-2">
                <p className="text-[#20262E] text-[10px] font-semibold">More</p>
                <Image
                  src="/arrowup.svg"
                  alt="arrowUp"
                  width={7}
                  height={9}
                />
              </div>
            </button>
            <button className="bg-[#1F2935] rounded-xs p-2.5">
              <div className="flex items-center justify-center gap-2">
                <p className="text-white text-[10px] font-semibold">Less</p>
                <Image
                  src="/arrdown.png"
                  alt="arrowDown"
                  width={7}
                  height={9}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-white text-xl">Loading players...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8 py-8 ">
      {/* First Marquee */}
      <Marquee speed={40} gradient={false} pauseOnHover autoFill>
        {marquee1Players.map((playerProp) => (
          <PlayerCard key={playerProp.player.id} playerProp={playerProp} />
        ))}
      </Marquee>

      {/* Second Marquee */}
      <Marquee speed={40} gradient={false} direction="right" pauseOnHover autoFill>
        {marquee2Players.map((playerProp) => (
          <PlayerCard key={playerProp.player.id} playerProp={playerProp} />
        ))}
      </Marquee>

      {/* Third Marquee */}
      <Marquee speed={40} gradient={false} pauseOnHover autoFill>
        {marquee3Players.map((playerProp) => (
          <PlayerCard key={playerProp.player.id} playerProp={playerProp} />
        ))}
      </Marquee>
    </div>
  )
}