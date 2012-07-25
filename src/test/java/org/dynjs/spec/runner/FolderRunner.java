package org.dynjs.spec.runner;

import java.io.File;
import java.net.URISyntaxException;
import java.util.Collection;

import org.junit.runner.RunWith;

@RunWith(DynJSTestRunner.class)
public class FolderRunner {

	private String folderName;

	public FolderRunner(String folderName) {
		this.folderName = folderName;
	}

	public Collection<File> files() throws URISyntaxException {
		return JSFileUtils.listFiles(this.folderName);
	}
}
