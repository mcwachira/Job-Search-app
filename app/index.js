import React , {useState} from 'react'
import {View, ScrollView, SafeAreaView} from 'react-native'
import {Stack, useRouter} from 'expo-router'
import {COLORS, icons, images, SIZES} from '../constants'
import {  ScreenHeaderBtn,
    Welcome,
    NearbyJobs,
    PopularJobs,
    Company,
    JobTabs,
    JobAbout,
    JobFooter,
    Specifics,
    NearbyJobCard} from '../components'


const Home =() => {
    const [searchTerm, setSearchTerm] = useState("")

    const router = useRouter()
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>

        <Stack.Screen
       options={{
        headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerTitle:"",
        headerLeft:() => (
<ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%"/>
        ),

        headerRight:() => (
            <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%"/>  ),

       }}/>

       <ScrollView showsVerticalScrollIndicator={false}>
        <View
        style={{flex:1,padding:SIZES.medium}}
        >
<Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm}
handleClick={() => {
    if(searchTerm){
        router.push(`/search/${searchTerm}`)
    }
}}

/>
<PopularJobs/>

<NearbyJobs/>

        </View>
       </ScrollView>
        </SafeAreaView>
    )
}

export default Home
// export default function Home() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         {/* Use the `Screen` component to configure the layout. */}
//         <Stack.Screen options={{ title: "Overview" }} />
//         {/* Use the `Link` component to enable optimized client-side routing. */}
//         <Link href="/details">Go to Details</Link>
//       </View>
//     );
//   }