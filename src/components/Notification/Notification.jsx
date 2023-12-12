import { Stat } from 'components/Statistics/Statistics.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <Stat>{message}</Stat>
    </>
  );
};
