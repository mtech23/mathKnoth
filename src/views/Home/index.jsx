/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 01/03/2024 - 21:47:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/03/2024
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import { UserLayout } from '../Layout'
import { HomeBanner } from '../../components/HomeBanner'
import { HomeCategory } from '../../components/Categories'
import { Plans } from '../../components/Plans'
import { VideoHome } from '../../components/VideoHome'

export const Home = () => {
  return (
    <UserLayout>
        <HomeBanner />
        <HomeCategory head="true" />
    </UserLayout>
  )
}
