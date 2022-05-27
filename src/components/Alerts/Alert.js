import React from 'react';
import {
  Alert as AlertNB,
  Text,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
} from 'native-base';

export const Alert = ({status}) => {
  return (
    <AlertNB w="100%" status={status.status}>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <AlertNB.Icon mt="1" />
            <Text fontSize="md" color="coolGray.800">
              {status.title}
            </Text>
          </HStack>
          <IconButton
            variant="unstyled"
            _focus={{
              borderWidth: 0,
            }}
            icon={<CloseIcon size="3" color="coolGray.600" />}
          />
        </HStack>
      </VStack>
    </AlertNB>
  );
};
