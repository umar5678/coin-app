import { useEffect, useState } from 'react'
import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react'
import axios from 'axios'
import { server } from '../main'
import Loader from './Loader'
import CoinCard from './CoinCard'
import ErrorComponent from './ErrorComponent'


const Coins = () => {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState('pkr')

  const currencySymbol = currency === "pkr" ? "Rs." : currency === "eur" ? "€" : "$";
  const changePage = (page) => {
    setPage(page)
    setLoading(true)
  }

  const btns = new Array(132).fill(1)


  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);

        setCoins(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }

    fetchCoins()
  }, [currency, page])

  if (error) return <ErrorComponent message={'Error Fetching Data'} />

  return (
    <Container maxW={'container.xl'}>

      {
        loading ? <Loader /> : (
          <>
          <RadioGroup value='currency' onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value='pkr'>PKR</Radio>
              <Radio value='usd'>USD</Radio>
              <Radio value='eur'>EUR</Radio>
            </HStack>
          </RadioGroup>
            <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
              {
                coins.map((i) => (
                  <CoinCard name={i.name} img={i.image} symbol={i.symbol}
                    url={i.url} key={i.id} price={i.current_price} id={i.id} currencySymbol={currencySymbol} />
                ))
              }
            </HStack>
            <HStack w={'full'} overflow={'auto'} p={'8'}>
              {
                btns.map((item, index) => (
                  <Button key={index} bgColor={'blackAlpha.900'} color={'white'} onClick={() => changePage(index + 1)}>
                    {index + 1}
                  </Button>
                ))
              }
            </HStack>
          </>
        )
      }
    </Container>
  )
}



export default Coins