import { createGlobalStyle } from 'styled-components';

// utils
import { Utils } from './utils/Utils.styles'

// base
import { Base } from './Base.styles'

// elements
import { Buttons } from './elements/Buttons.styles'
import { Links } from './elements/Links.styles'
import { Images } from './elements/Images.styles'
import { Select } from './elements/Select.styles'

export const GlobalStyles = createGlobalStyle`
  /* utils */
  ${Utils}

  /* typography */

  /* base */
  ${Base}

  /* elements */
  ${Buttons}
  ${Links}
  ${Images}
  ${Select}
`;