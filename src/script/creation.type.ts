export interface CreateImageProps {
  /**
   * Change canvas width
   */
  width?: number;
  /**
   * Change canvas height
   */
  height?: number;
  /**
   * Change canvas background color
   */
  backgroundColor?: string | CanvasGradient | CanvasPattern;
  /**
   * Change properties of the title
   */
  titleFontStyle?: string;
  /**
   * Change the alignment of the canvas texts
   */
  textAlign?: CanvasTextAlign;
  /**
   * Change the title of the canvas
   */
  textTitle?: string;
  /**
   * Change color of the title background
   */
  titleFillStyle?: string | CanvasGradient | CanvasPattern;
  /**
   * Change color of the title
   */
  titleColor?: string | CanvasGradient | CanvasPattern;
  /**
   * Change color of the sub text
   */
  subTextColor?: string | CanvasGradient | CanvasPattern;
  /**
   * Change properties of the sub text
   */
  subTextFontStyle?: string;
  /**
   * Change the sub text
   */
  subText?: string;
  /**
   * Set a logo
   */
  extraLogo?: string;
  /**
   * Set the path of the created file
   */
  filePath: string;
}
