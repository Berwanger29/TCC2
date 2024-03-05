import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 0px 15px;
  border: 1px solid ${({ theme }) => theme.colors.tabBarIconColor};
  border-radius: 10px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerStatusColor = styled.View`
  background-color: ${({ theme, status }) => {
    let color = theme.colors.yellow;

    switch (status) {
      case "cancelado":
        color = theme.colors.statusCanceled;
        break;

      case "aguardando":
        color = theme.colors.statusWaiting;
        break;

      case "agendado":
        color = theme.colors.statusScheduled;
        break;

      default:
        color = theme.colors.statusFinished;
        break;
    }

    return color;
  }};
  padding: 2px 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const WrapperStatus = styled.View`
  flex-direction: row;
  margin-top: 7px;
`;

export const WrapperDateTime = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 15px
`;
