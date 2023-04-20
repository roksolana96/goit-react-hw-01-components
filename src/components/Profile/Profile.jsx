import PropTypes from 'prop-types';
import {
  ProfileBlock,
  Avatar,
  ProfileTitle,
  ProfileDescr,
  StatsList,
  StatsItem,
  StatsInfo,
  StatsInfoTitile,
  Description} from './Profile.styled'


export const Profile = ({username,tag,avatar,location,stats}) => {
    return (
        <ProfileBlock>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
      
    />
    <ProfileTitle>{username}</ProfileTitle>
    <ProfileDescr>@{tag}</ProfileDescr>
    <ProfileDescr>{location}</ProfileDescr>
  </Description>

  <StatsList>
    <StatsItem>
      <StatsInfoTitile>Followers</StatsInfoTitile>
      <StatsInfo>{stats.followers}</StatsInfo>
    </StatsItem>
    <StatsItem>
      <StatsInfoTitile>Views</StatsInfoTitile>
      <StatsInfo>{stats.views}</StatsInfo>
    </StatsItem>
    <StatsItem>
      <StatsInfoTitile>Likes</StatsInfoTitile>
      <StatsInfo>{stats.likes}</StatsInfo>
    </StatsItem>
  </StatsList>
</ProfileBlock>
    ) 
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
};