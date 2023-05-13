import styled,{useTheme} from 'styled-components';
import { Stack } from 'react-bootstrap';
import { selectableChains } from '../subComponents/Chain';
import { getEllipsisTxt } from '../utilis/formatters';
import { useChain,useMoralis } from 'react-moralis';

const HeaderContainer = styled.div`
display:flex;
justify-content:center;
padding-bottom: 1rem;
color: ${(props) => props.theme.cardTextColor};
`;

const HeaderContent = styled.div`align-self:center;`;

const Space = styled.div`

height:4px;`;

const Text = styled.div`
  font-size: calc(1em + 0.2vw);
  font-weight: 300;
`;
const  WalletHeader=(props)=>{
  const theme = useTheme();

    const {chainId} = useChain();
    const {account}= useMoralis();
    return <HeaderContainer theme={theme}>
        <Stack direction='vertical'>
            <HeaderContent>
                {selectableChains.find((item) => item.key === chainId)?.icon}
            </HeaderContent>
            <HeaderContainer>
                <Space />
            </HeaderContainer>
            <HeaderContent>
                {getEllipsisTxt(account, 6)}
            </HeaderContent>
            <hr/>
        <HeaderContent>
        <Text>
       Transfer Assets
   </Text>   
        </HeaderContent>
        </Stack>

    </HeaderContainer>;
}


export default WalletHeader;