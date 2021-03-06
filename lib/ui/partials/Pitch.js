import styled from "styled-components";

import { Actionbar } from "ui/components";
import { breakpoint, color, track } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Pitch = styled.header`
  ${setSpace("mbh")};
  ${setSpace("pbh")};
  ${setType("s")};
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  text-align: center;
  text-align: left;
  .small {
    ${setSpace("mvs")};
    ${setType("s")};
    color: ${color.flareBlk};
    font-weight: 800;
    letter-spacing: ${track.s};
    text-transform: uppercase;
  }
  .hero {
    ${setSpace("mbh")};
    ${setType("k")};
    color: ${({ theme }) => theme.titleColor};
    font-style: italic;
    font-weight: 800;
    span {
      background: ${color.flareLt};
      line-height: 1.3em;
    }
  }
  .para {
    ${setSpace("mvs")};
    ${setType("l")};
    color: ${color.flareBlk};
  }
  ${Actionbar} {
    ${setSpace("mtl")};
  }
  ${breakpoint.phone} {
    ${setSpace("phl")};
  }
`;

export default Pitch;
