// Requiring module
const assert = require('assert');
const checkOtherDirectory = require('../checkOtherDirectory');
const checkValid = require('../checkValid');
const { listDirectories } = require('../ListAnything');
const parseDirecory = require('../parseDirectory')
const parsePosFileTest = require("../parsePosFile")
const Listing = require('../ListAnything.js')
  
describe("Unitary tests",() => {
  describe( "CheckOtherDirectory tests :",() => {
    it("Is returning \"\"",() => {
      assert.equal(checkOtherDirectory("guide"), "");
    });

    it("Is returning /",() => {
      assert.equal(checkOtherDirectory("/guide"), "/");
    });

    it ("Is returning ../gen/value/test/",() => {
      assert.equal(checkOtherDirectory("../gen/value/test/guide"), "../gen/value/test/");
    });

    it ("Is returning ../../../../~/home/nathan/pwd/../gen/value/test/", () => {
        assert.equal(checkOtherDirectory("../../../../~/home/nathan/pwd/../gen/value/test/guide"), "../../../../~/home/nathan/pwd/../gen/value/test/");
    });

    it ("Crash 1", () => {
        assert.equal(checkOtherDirectory("guide/"), "guide/");
    });

    it ("Crash 2", () => {
        assert.equal(checkOtherDirectory("/"), "/");
    });

    it ("Crash 3", () => {
        assert.equal(checkOtherDirectory("/guide/"), "/guide/");
    });

    it ("Crash 4", () => {
        assert.equal(checkOtherDirectory(""), "");
    });
  });
  describe("CheckValid tests :", () => {
    it ("Is returning 1", () => {
        assert.equal(checkValid.checkValidTest(parseInt(1)), 1);
    });

    it ("Is returning 999", () => {
        assert.equal(checkValid.checkValidTest(parseInt(999)), 999);
    });

    it ("Is returning 15000", () => {
        assert.equal(checkValid.checkValidTest(parseInt(15000)), 15000);
    });

    it ("Crash 1", () => {
        assert.equal(checkValid.checkValidTest(parseInt("a")), "false");
    });

    it ("Crash 2", () => {
        assert.equal(checkValid.checkValidTest(parseInt(-1)), "false");
    });

    it ("Crash 3", () => {
        assert.equal(checkValid.checkValidTest(parseInt(-999)), "false");
    });

    it ("Crash 4", () => {
        assert.equal(checkValid.checkValidTest(parseInt("")), "false");
    });
  });

  describe("ParseNameDirectory tests :", () => {
    it ("Is returning 'Value'", () => {
        assert.equal(parseDirecory.parseNameDirectoryTest("1.Value"), "1.Value");
    });

    it ("Is returning 'Ceci est un name'", () => {
        assert.equal(parseDirecory.parseNameDirectoryTest("55.Ceci est un name"), "55.Ceci est un name");
    });

    it ("Is returning 'Dossier numéro 5'", () => {
        assert.equal(parseDirecory.parseNameDirectoryTest("05.Dossier numéro 5"), "05.Dossier numéro 5");
    });

    it ("Crash 1", () => {
        assert.equal(parseDirecory.parseNameDirectoryTest("v"), "v");
    });

    it ("Crash 2", () => {
        assert.equal(parseDirecory.parseNameDirectoryTest("1Valuee"), "1Valuee");
    });

    it ("Is returning 'Name of Folder'", () => {
        assert.equal(parseDirecory.parseNameDirectoryTest(".Name of Folder"), ".Name of Folder");
    });

    it ("Crash 3", () => {
        assert.equal(parseDirecory.parseNameDirectoryTest("Name of Folder"), "Name of Folder");
    });

    it ("Crash 4", () => {
        assert.equal(parseDirecory.parseNameDirectoryTest(""), "");
    });

    it ("Is returning ''", () => {
        assert.equal(parseDirecory.parseNameDirectoryTest("1."), "1.");
    });

    it ("Crash 6", () => {
        assert.equal(parseDirecory.parseNameDirectoryTest("1"), "1");
    });
  });

  describe("ParsePosDirectory tests :", () => {
    it ("Is returning 1", () => {
        assert.equal(parseDirecory.parsePosDirectoryTest("1.Value"), 1);
    });

    it ("Is returning 55", () => {
        assert.equal(parseDirecory.parsePosDirectoryTest("55.Ceci est un name"), 55);
    });

    it ("Is returning 5", () => {
        assert.equal(parseDirecory.parsePosDirectoryTest("05.Dossier numéro 5"), 5);
    });

    it ("Is returning 11", () => {
      assert.equal(parseDirecory.parsePosDirectoryTest("11Valuee"), "11");
    });

    it ("Is returning 999", () => {
        assert.equal(parseDirecory.parsePosDirectoryTest("guide/moulago/lolllll/999Fileur"), 999);
    });

    it ("Is returning 4", () => {
        assert.equal(parseDirecory.parsePosDirectoryTest("/home/nathan/Ubika/DOC/documentation-ubika/gen_config_vuepress/guide/1.Bruxelle/1.A4/3.Perfect./4.craking_noise"), 4);
    });

    it ("Crash 1", () => {
        assert.equal(parseDirecory.parsePosDirectoryTest("v"), "false");
    });

    it ("Crash 2", () => {
        assert.equal(parseDirecory.parsePosDirectoryTest(".Name of Folder"), 'false');
    });

    it ("Crash 3", () => {
        assert.equal(parseDirecory.parsePosDirectoryTest("Name of Folder"), 'false');
    });

    it ("Crash 4", () => {
        assert.equal(parseDirecory.parsePosDirectoryTest(""), 'false');
    });
  });

//   describe("ParsePosFile tests :", () => {
//     it ("Is returning 999", () => {
//         assert.equal(parsePosFileTest.parsePosFileTest("guide/started/Moula/autre.md"), 999);
//     });

//     it ("Is returning 9", () => {
//         assert.equal(parsePosFileTest.parsePosFileTest("guide/2.started/Add-a-Reverse-Proxy.md"), 9);
//     });

//     it ("Is returning 4", () => {
//         assert.equal(parsePosFileTest.parsePosFileTest("guide/2.started/The-WAAP-in-the-cloud.md"), 4);
//     });

//     it ("Is returning 1000", () => {
//         assert.equal(parsePosFileTest.parsePosFileTest("guide/2.started/The-WAAP-on-a-virtual-machine.md"), 1000);
//     });
//   });

//   describe("listDirectories tests :", () => {
//     it ("Is Returning a empty array", () => {
// 				assert.equal(Listing.listDirectories("guide/2.started/1.Moula").length, 0);
// 		});

// 		it ("Is Returning a good array", () => {
// 				array1 = ["1.Moula", "2.Stateur"]
// 				array2 = Listing.listDirectories("guide/2.started")
// 				assert.equal(JSON.stringify(array1) === JSON.stringify(array2), true);
// 		});

// 		it ("Is Returning a good array", () => {
// 				array1 = ["1.beacoup_de_choses", "2.loollli", "3.mistère", "4.Mistrou"]
// 				array2 = Listing.listDirectories("dingueries/")
// 				assert.equal(JSON.stringify(array1) === JSON.stringify(array2), true);
// 		});

// 		it ("Is Returning a empty array", () => {
// 				assert.equal(Listing.listDirectories("guide/1.Bruxelle/1.A4/3.Perfect./4.craking_noise").length, 0);
// 		});
// 	});

// 	describe("listFiles tests :", () => {
// 		it ("Is Returning a empty array", () => {
// 				assert.equal(Listing.listMdFiles("guide/1.Bruxelle/1.A4/3.Perfect./4.craking_noise").length, 0);
// 		});

// 		it ("Is Returning a good array", () => {
// 				array1 = [
// 				"guide/2.started/Add-a-Reverse-Proxy.md",
// 				"guide/2.started/Add-a-Tunnel-to-secure-a-web-application.md", 
// 				"guide/2.started/Administration-IP-and-WAAP-ports-to-open-on-network-firewall.md",
// 				"guide/2.started/Administration-interface-to-manage-the-cluster.md",
// 				"guide/2.started/Apply-the-configuration.md",
// 				"guide/2.started/Configure-IP-addresses,-routes-and-server-time.md",
// 				"guide/2.started/Configure-the-Management-or-Managed-mode.md",
// 				"guide/2.started/Get-started.md",
// 				"guide/2.started/Installation-from-the-ISO.md",
// 				"guide/2.started/Request-and-assign-a-WAAP-license.md",
// 				"guide/2.started/The-WAAP-in-the-cloud.md",
// 				"guide/2.started/The-WAAP-on-a-virtual-machine.md",
// 				"guide/2.started/The-WAAP-on-an-appliance.md",
// 				"guide/2.started/UBIKA-Support---Contact.md"]
// 				array2 = Listing.listMdFiles("guide/2.started")
// 				assert.equal(JSON.stringify(array1) === JSON.stringify(array2), true);
// 		});

// 		it ("Is Returning a false", () => {
// 				assert.equal(Listing.listMdFiles("dingueries/").length, 0);
// 		});

// 		it ("Is Returning a empty array", () => {
// 				assert.equal(Listing.listMdFiles("guide/1.Bruxelle/1.A4/3.Perfect./4.craking_noise").length, 0);
// 		});
// 	});
});