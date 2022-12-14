import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineInstagram } from 'react-icons/ai'
import Wrapper from '../../../components/wrapper'
import { MainSectionContainer, Title, Description, CardList, Card, OfficialSiteWrapper, OfficialSite, Instagram } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const MainSection: React.FC<PageProps> = ({ language }) => {
  return (
    <Wrapper>
      <MainSectionContainer>
        <Title>{trans(language, 'partners', 'title')}</Title>
        <Description>{trans(language, 'partners', 'desc')}</Description>
        <CardList>
          <Card>
            <Image src="/assets/images/partners/blend.png" width={258} height={202} alt="no img" />
            <h4>{trans(language, 'partners', 'card-1-title')}</h4>
            <span>{trans(language, 'partners', 'card-1-desc')}</span>
            <p>{trans(language, 'partners', 'card-1-detail')}</p>
            <OfficialSiteWrapper>
              <OfficialSite>{trans(language, 'partners', 'officialsite')}</OfficialSite>
              <Instagram>
                <Link href="https://www.instagram.com/blend_berisha21/?next=%2Fgalaxyballs_official%2F">
                  <a target="_blank" rel="noreferrer">
                    <AiOutlineInstagram />
                  </a>
                </Link>
              </Instagram>
            </OfficialSiteWrapper>
          </Card>
          <Card>
            <Image src="/assets/images/partners/aldin.png" width={258} height={202} alt="no img" />
            <h4>{trans(language, 'partners', 'card-2-title')}</h4>
            <span>{trans(language, 'partners', 'card-2-desc')}</span>
            <p>{trans(language, 'partners', 'card-2-detail')}</p>
            <OfficialSiteWrapper>
              <OfficialSite>{trans(language, 'partners', 'officialsite')}</OfficialSite>
              <Instagram>
                <Link href="https://www.instagram.com/aldinmax_agency/?next=%2Fgalaxyballs_official%2F">
                  <a target="_blank" rel="noreferrer">
                    <AiOutlineInstagram />
                  </a>
                </Link>
              </Instagram>
            </OfficialSiteWrapper>
          </Card>
          <Card>
            <Image src="/assets/images/partners/besnik.png" width={258} height={202} alt="no img" />
            <h4>{trans(language, 'partners', 'card-3-title')}</h4>
            <span>{trans(language, 'partners', 'card-3-desc')}</span>
            <p>{trans(language, 'partners', 'card-3-detail')}</p>
            <OfficialSiteWrapper>
              <OfficialSite>{trans(language, 'partners', 'officialsite')}</OfficialSite>
              <Instagram>
                <Link href="https://www.instagram.com/besnik_tafallari/?next=%2Fgalaxyballs_official%2F">
                  <a target="_blank" rel="noreferrer">
                    <AiOutlineInstagram />
                  </a>
                </Link>
              </Instagram>
            </OfficialSiteWrapper>
          </Card>
          <Card>
            <Image src="/assets/images/partners/samafro.png" width={258} height={202} alt="no img" />
            <h4>{trans(language, 'partners', 'card-4-title')}</h4>
            <span>{trans(language, 'partners', 'card-4-desc')}</span>
            <p>{trans(language, 'partners', 'card-4-detail')}</p>
            <OfficialSiteWrapper>
              <OfficialSite>{trans(language, 'partners', 'officialsite')}</OfficialSite>
              <Instagram>
                <Link href="https://www.instagram.com/samafro1/?next=%2Fgalaxyballs_official%2F">
                  <a target="_blank" rel="noreferrer">
                    <AiOutlineInstagram />
                  </a>
                </Link>
              </Instagram>
            </OfficialSiteWrapper>
          </Card>
        </CardList>
        <CardList>
          <Card>
            <Image src="/assets/images/partners/john.png" width={258} height={202} alt="no img" />
            <h4>{trans(language, 'partners', 'card-5-title')}</h4>
            <span>{trans(language, 'partners', 'card-5-desc')}</span>
            <p>{trans(language, 'partners', 'card-5-detail')}</p>
          </Card>
          <Card>
            <Image src="/assets/images/partners/lisa.png" width={258} height={202} alt="no img" />
            <h4>{trans(language, 'partners', 'card-6-title')}</h4>
            <span>{trans(language, 'partners', 'card-6-desc')}</span>
            <p>{trans(language, 'partners', 'card-6-detail')}</p>
            <OfficialSiteWrapper>
              <OfficialSite>{trans(language, 'partners', 'officialsite')}</OfficialSite>
              <Instagram>
                <AiOutlineInstagram />
              </Instagram>
            </OfficialSiteWrapper>
          </Card>
          <Card>
            <Image src="/assets/images/partners/crowdfunding.png" width={258} height={202} alt="no img" />
            <h4>{trans(language, 'partners', 'card-7-title')}</h4>
            <span>{trans(language, 'partners', 'card-7-desc')}</span>
            <p>{trans(language, 'partners', 'card-7-detail')}</p>
            <OfficialSiteWrapper>
              <OfficialSite>ulule.com</OfficialSite>
              <OfficialSite style={{ width: '106px' }}>kickstarter.com</OfficialSite>
            </OfficialSiteWrapper>
          </Card>
          <Card>
            <Image src="/assets/images/partners/joinus.png" width={258} height={222} alt="no img" />
            <h4>{trans(language, 'partners', 'card-8-title')}</h4>
            <span>{trans(language, 'partners', 'card-8-desc')}</span>
            <p>{trans(language, 'partners', 'card-8-detail')}</p>
          </Card>
        </CardList>
      </MainSectionContainer>
    </Wrapper>
  )
}

export default MainSection
