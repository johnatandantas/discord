import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="Johnatan Dantas"
          date="28/07/2020"
          content="Hoje é o meu aniversário"
        />
        <ChannelMessage
          author="Johnatan Dantas"
          date="28/07/2020"
          hasMention
          isBot
          content={(
            <>
              <Mention> @Johnatan Dantas</Mention>
              <div>, me carregar no lol</div>
            </>
          )}
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
