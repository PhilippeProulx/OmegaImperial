var draw = SVG('board').size(1366, 768);

let board = new Board()

board.AddPiece(PieceType.Flag, Nation.GreatBritain  , 320, 225)
board.AddPiece(PieceType.Flag, Nation.GreatBritain  , 320, 225)
board.AddPiece(PieceType.Flag, Nation.AustriaHungary, 330, 245)
board.AddPiece(PieceType.Flag, Nation.Italy         , 340, 265)

board.AddPiece(PieceType.Flag   , Nation.GreatBritain  , 500, 400)
board.AddPiece(PieceType.Army   , Nation.AustriaHungary, 500, 400)
board.AddPiece(PieceType.Factory, Nation.Italy         , 500, 400)
board.AddPiece(PieceType.Fleet  , Nation.France        , 500, 400)
board.AddPiece(PieceType.Marker , Nation.GermanEmpire  , 500, 400)

board.AddPiece(PieceType.Flag, Nation.GreatBritain  , 320, 225)
board.AddPiece(PieceType.Flag, Nation.AustriaHungary, 330, 245)
board.AddPiece(PieceType.Flag, Nation.Italy         , 340, 265)
board.AddPiece(PieceType.Flag, Nation.France        , 350, 285)
board.AddPiece(PieceType.Flag, Nation.GermanEmpire  , 360, 305)
board.AddPiece(PieceType.Flag, Nation.Russia        , 370, 325)

board.AddPiece(PieceType.Army, Nation.GreatBritain  , 370, 225)
board.AddPiece(PieceType.Army, Nation.AustriaHungary, 380, 245)
board.AddPiece(PieceType.Army, Nation.Italy         , 390, 265)
board.AddPiece(PieceType.Army, Nation.France        , 400, 285)
board.AddPiece(PieceType.Army, Nation.GermanEmpire  , 410, 305)
board.AddPiece(PieceType.Army, Nation.Russia        , 420, 325)

board.AddPiece(PieceType.Factory, Nation.GreatBritain  , 220, 225)
board.AddPiece(PieceType.Factory, Nation.AustriaHungary, 230, 245)
board.AddPiece(PieceType.Factory, Nation.Italy         , 240, 265)
board.AddPiece(PieceType.Factory, Nation.France        , 250, 285)
board.AddPiece(PieceType.Factory, Nation.GermanEmpire  , 260, 305)
board.AddPiece(PieceType.Factory, Nation.Russia        , 270, 325)

board.AddPiece(PieceType.Fleet, Nation.GreatBritain  , 270, 225)
board.AddPiece(PieceType.Fleet, Nation.AustriaHungary, 280, 245)
board.AddPiece(PieceType.Fleet, Nation.Italy         , 290, 265)
board.AddPiece(PieceType.Fleet, Nation.France        , 300, 285)
board.AddPiece(PieceType.Fleet, Nation.GermanEmpire  , 310, 305)
board.AddPiece(PieceType.Fleet, Nation.Russia        , 320, 325)

board.AddPiece(PieceType.Marker, Nation.GreatBritain  , 170, 225)
board.AddPiece(PieceType.Marker, Nation.AustriaHungary, 180, 245)
board.AddPiece(PieceType.Marker, Nation.Italy         , 190, 265)
board.AddPiece(PieceType.Marker, Nation.France        , 200, 285)
board.AddPiece(PieceType.Marker, Nation.GermanEmpire  , 210, 305)
board.AddPiece(PieceType.Marker, Nation.Russia        , 220, 325)

board.AddPiece(PieceType.Flag, Nation.France, 160, 325)